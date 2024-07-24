import { IsString, IsNotEmpty, IsObject, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { TrxContentDto } from './TrxContentDto';

export class KafkaMessageDto {
  @IsNumber()
  @IsNotEmpty()
  level: number;

  @IsNumber()
  @IsNotEmpty()
  time: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => TrxContentDto)
  @IsObject()
  @IsNotEmpty()
  pago: TrxContentDto;

  @IsString()
  @IsNotEmpty()
  msg: string;
}
