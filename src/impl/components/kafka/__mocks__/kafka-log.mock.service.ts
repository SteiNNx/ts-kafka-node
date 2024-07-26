import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class KafkaServiceLogMock {
  async sendMessageLog(message: object) {
    try {
      const formattedMessage = JSON.stringify(message);
      console.log('Mock Log sending message to Kafka:', { message: formattedMessage });
      return Promise.resolve('Message sent successfully');
    } catch (error) {
      console.error('Mock Log failed to send message', error);
      throw new BadRequestException('Mock Log failed to send message to Kafka');
    }
  }

  async checkKafkaConnection() {
    try {
      console.log('Mock Log Kafka connection check successful');
      return 'connected';
    } catch (error) {
      console.error('Mock Log Kafka connection check failed', error);
      return 'disconnected';
    }
  }
}
