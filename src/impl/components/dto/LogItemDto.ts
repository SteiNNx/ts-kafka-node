import { IsString, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { InfoAdicionalPOSDto } from './InfoAdicionalPOSDto';
import { FechasDto } from './FechasDto';
import { POSrequestDto } from './POSrequestDto';
import { RequestSentDto } from './RequestSentDto';
import { ResponseFullDto } from './ResponseFullDto';
import { ResponseDto } from './ResponseDto';

export class LogItemDto {
  @IsString()
  @IsNotEmpty()
  idPago: string;

  @IsString()
  @IsNotEmpty()
  rrn: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @ValidateNested()
  @Type(() => InfoAdicionalPOSDto)
  @IsObject()
  @IsNotEmpty()
  infoAdicionalPOS: InfoAdicionalPOSDto;

  @ValidateNested()
  @Type(() => FechasDto)
  @IsObject()
  @IsNotEmpty()
  fechas: FechasDto;

  @ValidateNested()
  @Type(() => POSrequestDto)
  @IsObject()
  @IsNotEmpty()
  POSrequest: POSrequestDto;

  @ValidateNested()
  @Type(() => RequestSentDto)
  @IsObject()
  @IsNotEmpty()
  requestSent: RequestSentDto;

  @ValidateNested()
  @Type(() => ResponseFullDto)
  @IsObject()
  @IsNotEmpty()
  responseFull: ResponseFullDto;

  @ValidateNested()
  @Type(() => ResponseDto)
  @IsObject()
  @IsNotEmpty()
  response: ResponseDto;
}
