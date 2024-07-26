import { IsString, IsNotEmpty } from 'class-validator';

export class DatosComercioDto {
  @IsString()
  @IsNotEmpty()
  MCC: string;

  @IsString()
  @IsNotEmpty()
  ciudadComercio: string;

  @IsString()
  @IsNotEmpty()
  clientAppOrg: string;

  @IsString()
  @IsNotEmpty()
  comunaComercio: string;

  @IsString()
  @IsNotEmpty()
  dv: string;

  @IsString()
  @IsNotEmpty()
  idComercio: string;

  @IsString()
  @IsNotEmpty()
  paisComercio: string;

  @IsString()
  @IsNotEmpty()
  rut: string;
}
