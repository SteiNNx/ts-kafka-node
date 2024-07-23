import { KafkaModule } from './kafka/modules/kafka.module';

(async () => {
  const clientId = process.env.KAFKA_CLIENT_ID || 'my-kafka-app';
  const brokers = process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'];
  const username = process.env.KAFKA_USERNAME || '';
  const password = process.env.KAFKA_PASSWORD || '';

  console.info({clientId});
  console.info({brokers});
  console.info({username});
  console.info({password});


  const kafkaModule = new KafkaModule();
  await kafkaModule.start();
  console.log('Kafka consumer started');
})();
