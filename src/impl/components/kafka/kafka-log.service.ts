import { Injectable, OnModuleInit, OnModuleDestroy, BadRequestException } from '@nestjs/common';
import { Kafka, Producer, logLevel } from 'kafkajs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaServiceLog implements OnModuleInit, OnModuleDestroy {
  private readonly producer: Producer;
  private readonly kafka: Kafka;

  constructor(private readonly configService: ConfigService) {
    const clientId = this.configService.get<string>('kafka.clientLogId');
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
      console.log('Producer trx-log connected successfully');
    } catch (error) {
      console.error('Failed to connect producer trx-log', error);
    }
  }

  async sendMessageLog(message: object) {
    try {
      const formattedMessage = JSON.stringify(message);
      console.log('Sending trx-log message to Kafka:', { message: formattedMessage });

      const topic = this.configService.get<string>('kafka.topic');
      const key = this.configService.get<string>('kafka.clientLogId');

      await this.producer.send({
        topic,
        messages: [{ value: formattedMessage, key }],
      });
      console.log('Message trx-log sent successfully');
    } catch (error) {
      console.error('Failed to send message trx-log', error);
      throw new BadRequestException('Failed to send message trx-log to Kafka');
    }
  }

  async onModuleDestroy() {
    try {
      await this.producer.disconnect();
      console.log('Producer trx-log disconnected successfully');
    } catch (error) {
      console.error('Failed to disconnect producer trx-log', error);
    }
  }

  async checkKafkaConnection() {
    try {
      await this.producer.connect();
      await this.producer.disconnect();
      console.log('Kafka trx-log connection check successful');
      return 'connected';
    } catch (error) {
      console.error('Kafka trx-log connection check failed', error);
      return 'disconnected';
    }
  }
}
