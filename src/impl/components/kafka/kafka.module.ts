import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaServiceLog } from './kafka-log.service';
import { KafkaMockService } from './__mocks__/kafka.mock.service';
import { KafkaServiceLogMock } from './__mocks__/kafka-log.mock.service';
import { KafkaController } from './kafka.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MessageTRX } from '../transMessage/messageTRX';
import { MessageTrxLog } from '../transMessage/messageTrxLog';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: KafkaService,
      useFactory: (configService: ConfigService) => {
        const nodeEnv = configService.get<string>('nodeEnv');
        return nodeEnv === 'test' ? new KafkaMockService() : new KafkaService(configService);
      },
      inject: [ConfigService],
    },
    {
      provide: KafkaServiceLog,
      useFactory: (configService: ConfigService) => {
        const nodeEnv = configService.get<string>('nodeEnv');
        return nodeEnv === 'test' ? new KafkaServiceLogMock() : new KafkaServiceLog(configService);
      },
      inject: [ConfigService],
    },
    MessageTRX,
    MessageTrxLog,
  ],
  controllers: [KafkaController],
  exports: [KafkaService, KafkaServiceLog],
})
export class KafkaModule {}
