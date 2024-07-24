import { IsString, IsNotEmpty, IsObject, ValidateNested, IsArray, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { DatosComercioDto } from './DatosComercioDto';
import { DatosPagoDto } from './DatosPagoDto';
import { DatosSucursalDto } from './DatosSucursalDto';
import { SecureFieldsDto } from './SecureFieldsDto';
import { DatosTarjetaDto } from './DatosTarjetaDto';
import { InfoAdicionalPOSDto } from './InfoAdicionalPOSDto';
import { LogItemDto } from './LogItemDto';

export class TrxContentDto {
  @IsString()
  @IsNotEmpty()
  idPago: string;

  @IsString()
  @IsNotEmpty()
  idTerminal: string;

  @IsString()
  @IsNotEmpty()
  codigoAutorizacion: string;

  @IsString()
  @IsNotEmpty()
  idComercio: string;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  rrn: string;

  @IsString()
  @IsNotEmpty()
  operacion: string;

  @ValidateNested()
  @Type(() => DatosComercioDto)
  @IsObject()
  @IsNotEmpty()
  datosComercio: DatosComercioDto;

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

  @ValidateNested()
  @Type(() => DatosTarjetaDto)
  @IsObject()
  @IsNotEmpty()
  datosTarjeta: DatosTarjetaDto;

  @IsString()
  @IsNotEmpty()
  fechaUTC: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ?? 'NA')
  fechaAnulacion: string;

  @ValidateNested()
  @Type(() => InfoAdicionalPOSDto)
  @IsObject()
  @IsNotEmpty()
  infoAdicionalPOS: InfoAdicionalPOSDto;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ?? 'NA')
  fechaDia: string;

  @IsString()
  @IsNotEmpty()
  numeroSerie: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ?? 'NA')
  diaNumSerie: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ?? 'NA')
  diaNumSerieEstado: string;

  @ValidateNested({ each: true })
  @Type(() => LogItemDto)
  @IsArray()
  @IsNotEmpty()
  log: LogItemDto[];

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ?? 'NA')
  attendant: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ?? 'NA')
  idAlianza: string;
}
