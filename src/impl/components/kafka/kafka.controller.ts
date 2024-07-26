import { Controller, Post, Body, ValidationPipe, BadRequestException } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaServiceLog } from './kafka-log.service';
import { KafkaMessageDto } from '../dto/Kafka-message.dto';
import { MessageTRX } from '../transMessage/messageTRX';
import { MessageTrxLog } from '../transMessage/messageTrxLog';
import { SchemaTrxLogSendKafkaDto } from '../schemasSendKafkaDto/SchemaTrxLogSendKafkaDto';
@Controller('kafka')
export class KafkaController {
  constructor(
    private readonly kafkaService: KafkaService,
    private readonly kafkaServiceLog: KafkaServiceLog,
    private readonly messageTRX: MessageTRX,
    private readonly messageTrxLog: MessageTrxLog
  ) {}

  @Post('send')
  async sendMessage(
    @Body(new ValidationPipe({ transform: true, whitelist: true })) kafkaMessageDto: KafkaMessageDto
  ) {
    // Log para ver los datos que llegan en el body
    console.log('Received message body: =================================> ', kafkaMessageDto);

    const { level, time, name, pago, msg } = kafkaMessageDto;

    if (!level || !time || !name || !msg || typeof pago !== 'object') {
      throw new BadRequestException('Invalid data');
    }

    /****** Proceso de mensaje Datos Trx *********/
    const trxMessage = this.messageTRX.transform(pago);

    // Enviar el nuevo mensaje a Kafka trx
    await this.kafkaService.sendMessage(trxMessage);

    /****** Proceso de mensaje Datos Log_Trx *********/
    const log_array = pago.log;

    if (!log_array || !Array.isArray(log_array)) {
      throw new BadRequestException('Invalid data');
    }

    const ArrayLogs: SchemaTrxLogSendKafkaDto[] = this.messageTrxLog.transform(log_array);
    console.log('ArrayLogs registros: =======> ', ArrayLogs.length);

    for (const itemArrayLogs of ArrayLogs) {
      // Enviar el nuevo mensaje a Kafka Log
      await this.kafkaServiceLog.sendMessageLog(itemArrayLogs);
    }

    return { message: 'Message received successfully' };
  }
}
