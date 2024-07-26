import { IsString, IsNotEmpty } from 'class-validator';

export class DatosTarjetaDto {
  @IsString()
  @IsNotEmpty()
  bin: string;

  @IsString()
  @IsNotEmpty()
  abreviatura: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  cardEntryMode: string;

  @IsString()
  @IsNotEmpty()
  cardSeqNumb: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  conditionCode: string;

  @IsString()
  @IsNotEmpty()
  fourDigits: string;

  @IsString()
  @IsNotEmpty()
  invoiceData: string;
}
