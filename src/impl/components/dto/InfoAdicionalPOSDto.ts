import { IsString, IsNotEmpty, IsObject, ValidateNested, IsBoolean } from 'class-validator';
import { FileVersionUpdateDto } from './FileVersionUpdateDto';
import { Transform, Type } from 'class-transformer';

export class InfoAdicionalPOSDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  canal: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  card_entry: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  portador: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  serial_number: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  sim_id: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  version_app: string;

  @ValidateNested()
  @Type(() => FileVersionUpdateDto)
  @IsObject()
  @IsNotEmpty()
  bins: FileVersionUpdateDto;

  @ValidateNested()
  @Type(() => FileVersionUpdateDto)
  @IsObject()
  @IsNotEmpty()
  emv_aid: FileVersionUpdateDto;

  @ValidateNested()
  @Type(() => FileVersionUpdateDto)
  @IsObject()
  @IsNotEmpty()
  emv_capk: FileVersionUpdateDto;

  @ValidateNested()
  @Type(() => FileVersionUpdateDto)
  @IsObject()
  @IsNotEmpty()
  errors: FileVersionUpdateDto;

  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? false)
  propinaActiva: boolean;
}
