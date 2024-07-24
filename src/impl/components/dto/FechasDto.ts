import { IsString, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class FechasDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaPOSLocal: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaPOSUTC: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaAPILocal: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaAPIUTC: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaAnulacion: string;
}
