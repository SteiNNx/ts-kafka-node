import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class DatosPagoDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  cuotas: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  propina: number;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  monto: number;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  iva: number;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  neto: number;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  totalExento: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  tipoComprobante: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  tipoCuota: string;
}
