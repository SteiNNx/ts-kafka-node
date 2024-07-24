import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { KafkaModule } from './impl/components/kafka/kafka.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
    }),
    KafkaModule,
  ],
})
export class AppModule {}
