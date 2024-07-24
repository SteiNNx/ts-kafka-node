import { Kafka, logLevel, Producer, Consumer } from 'kafkajs';
import * as dotenv from 'dotenv';

dotenv.config();

export class KafkaModule {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor() {
    const clientId = process.env.KAFKA_CLIENT_ID || 'my-kafka-app';
    const brokers = [process.env.KAFKA_BROKER || 'localhost:29092'];

    console.info({ clientId });
    console.info({ brokers });

    this.kafka = new Kafka({
      clientId,
      brokers,
      logLevel: logLevel.INFO,
    });

    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'payment-group' });
  }

  public async start(): Promise<void> {
    try {
      await this.consumer.connect();
      const topic = process.env.KAFKA_TOPIC || 'payments';
      await this.consumer.subscribe({ topic, fromBeginning: true });

      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          try {
            if (!message.value) {
              console.warn('Received message with no value');
              return;
            }

            const messageValue = message.value.toString();
            console.log(`Received message: ${messageValue}`);

            // Aquí puedes manejar el mensaje como necesites
          } catch (error) {
            console.error('Error parsing message:', error);
          }
        },
      });
    } catch (error) {
      console.error('Error starting Kafka consumer:', error);
    }
  }

  public async sendMessage(topic: string, message: string): Promise<void> {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic,
        messages: [{ value: message }],
      });
      console.log(`Message sent to topic ${topic}: ${message}`);
    } catch (error) {
      console.error('Error sending Kafka message:', error);
    }
  }
}
