import { KafkaModule } from './kafka/modules/kafka.module';

(async () => {
  const kafkaModule = new KafkaModule();
  await kafkaModule.start(); // Start the consumer
  await kafkaModule.sendMessage('payments', 'Your message here'); // Send a message
})();
