import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class KafkaMockService {
  async sendMessage(message: object) {
    try {
      const formattedMessage = JSON.stringify(message);
      console.log('Mock sending message to Kafka:', { message: formattedMessage });
      return Promise.resolve('Message sent successfully');
    } catch (error) {
      console.error('Mock failed to send message', error);
      throw new BadRequestException('Mock failed to send message to Kafka');
    }
  }

  async checkKafkaConnection() {
    try {
      console.log('Mock Kafka connection check successful');
      return 'connected';
    } catch (error) {
      console.error('Mock Kafka connection check failed', error);
      return 'disconnected';
    }
  }
}
