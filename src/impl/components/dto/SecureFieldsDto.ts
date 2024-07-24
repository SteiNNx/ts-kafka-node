import { IsString, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class SecureFieldsDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  pinBlock: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  pinblockKsn: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  track2: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  track2ksn: string;
}
