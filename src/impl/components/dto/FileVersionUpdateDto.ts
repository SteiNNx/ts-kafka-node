import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class FileVersionUpdateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  date_file: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  date_update: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  version: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Transform(({ value }) => value ?? 0)
  record_count: number;
}
