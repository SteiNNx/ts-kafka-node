import { Injectable, OnModuleInit, OnModuleDestroy, BadRequestException } from '@nestjs/common';
import { Kafka, Producer, logLevel } from 'kafkajs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly producer: Producer;
  private readonly kafka: Kafka;

  constructor(private readonly configService: ConfigService) {
    const clientId = this.configService.get<string>('kafka.clientId');
    const brokers = this.configService.get<string[]>('kafka.brokers');

    this.kafka = new Kafka({
      clientId: clientId,
      brokers,
      //sasl: {
      //  mechanism: 'plain',
      //  username: this.configService.get<string>('kafka.username'),
      //  password: this.configService.get<string>('kafka.password'),
      //},
      //ssl: true,
      logLevel: logLevel.INFO,
      //retry: {
      //  initialRetryTime: 100,
      //  retries: 3,
      //},
    });
    this.producer = this.kafka.producer();
  }

  async onModuleInit() {
    await this.connectProducer();
  }

  private async connectProducer() {
    try {
      await this.producer.connect();
      console.log('Producer trx connected successfully');
    } catch (error) {
      console.error('Failed to connect producer trx ', error);
    }
  }

  async sendMessage(message: object) {
    try {
      const formattedMessage = JSON.stringify(message);
      console.log('Sending trx message to Kafka:', { message: formattedMessage });

      const topic = this.configService.get<string>('kafka.topic');
      const key = this.configService.get<string>('kafka.clientId');

      await this.producer.send({
        topic,
        messages: [{ value: formattedMessage, key }],
      });
      console.log('Message trx sent successfully');
    } catch (error) {
      console.error('Failed to send message trx', error);
      throw new BadRequestException('Failed to send message trx to Kafka');
    }
  }

  async onModuleDestroy() {
    try {
      await this.producer.disconnect();
      console.log('Producer trx disconnected successfully');
    } catch (error) {
      console.error('Failed to disconnect producer trx', error);
    }
  }

  async checkKafkaConnection() {
    try {
      await this.producer.connect();
      await this.producer.disconnect();
      console.log('Kafka trx connection check successful');
      return 'connected';
    } catch (error) {
      console.error('Kafka trx connection check failed', error);
      return 'disconnected';
    }
  }
}
