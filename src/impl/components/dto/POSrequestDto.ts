import { IsString, IsNotEmpty, IsObject, ValidateNested, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { DatosTarjetaDto } from './DatosTarjetaDto';
import { DatosComercioDto } from './DatosComercioDto';
import { DatosPagoDto } from './DatosPagoDto';
import { DatosSucursalDto } from './DatosSucursalDto';
import { SecureFieldsDto } from './SecureFieldsDto';
import { InfoAdicionalPOSDto } from './InfoAdicionalPOSDto';

export class POSrequestDto {
  @IsString()
  @IsNotEmpty()
  idPago: string;

  @IsString()
  @IsNotEmpty()
  rrn: string;

  @IsString()
  @IsNotEmpty()
  idTerminal: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  captureDate: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fecha: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaUTC: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  millisecDate: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaAnulacion: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  currencyCode: string;

  @IsString()
  @IsNotEmpty()
  additionalInfo: string;

  @ValidateNested()
  @Type(() => DatosTarjetaDto)
  @IsObject()
  @IsNotEmpty()
  datosTarjeta: DatosTarjetaDto;

  @ValidateNested()
  @Type(() => DatosComercioDto)
  @IsObject()
  @IsNotEmpty()
  datosComercio: DatosComercioDto;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  idMerchant: string;

  @ValidateNested()
  @Type(() => DatosPagoDto)
  @IsObject()
  @IsNotEmpty()
  datosPago: DatosPagoDto;

  @ValidateNested()
  @Type(() => DatosSucursalDto)
  @IsObject()
  @IsNotEmpty()
  datosSucursal: DatosSucursalDto;

  @ValidateNested()
  @Type(() => SecureFieldsDto)
  @IsObject()
  @IsNotEmpty()
  secureFields: SecureFieldsDto;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  total: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  tipoOperacion: string;

  @ValidateNested()
  @Type(() => InfoAdicionalPOSDto)
  @IsObject()
  @IsNotEmpty()
  infoAdicionalPOS: InfoAdicionalPOSDto;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  idSucursalOP: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  attendant: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  idAlianza: string;
}
