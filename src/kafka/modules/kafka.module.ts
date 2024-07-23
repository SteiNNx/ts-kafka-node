import { Kafka, logLevel, EachMessagePayload } from 'kafkajs';
import { PaymentController } from '../controllers/payment.controller';
import { KafkaMessage } from '../../messages/kafka.messages';

export class KafkaModule {
  private kafka: Kafka;
  private paymentController: PaymentController;

  constructor() {
    const clientId = process.env.KAFKA_CLIENT_ID || 'my-kafka-app';
    const brokers = process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'];
    const username = process.env.KAFKA_USERNAME || '';
    const password = process.env.KAFKA_PASSWORD || '';

    console.info({clientId});
    console.info({brokers});
    console.info({username});
    console.info({password});

    this.kafka = new Kafka({
      clientId,
      brokers,
      logLevel: logLevel.INFO,
      ssl: true,
      sasl: {
        mechanism: 'plain',
        username,
        password,
      },
    });

    this.paymentController = new PaymentController();
    console.log('Kafka configuration:', { clientId, brokers, username });
  }

  public async start(): Promise<void> {
    const consumer = this.kafka.consumer({ groupId: 'payment-group' });

    try {
      await consumer.connect();
      const topic = process.env.KAFKA_TOPIC || 'payments';
      await consumer.subscribe({ topic, fromBeginning: true });

      await consumer.run({
        eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
          try {
            if (!message.value) {
              console.warn('Received message with no value');
              return;
            }

            const messageValue = message.value.toString();
            const kafkaMessage: KafkaMessage = JSON.parse(messageValue);

            await this.paymentController.handleMessage(kafkaMessage);
          } catch (error) {
            console.error('Error parsing message or handling payment:', error);
          }
        },
      });
    } catch (error) {
      console.error('Error starting Kafka consumer:', error);
    }
  }
}
