import { IsString, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';

class OpSvcRsHeaderDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  rqUID: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  operationType: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  statusCode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  severity: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  statusDescription: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  serverDateTime: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  customerLanguagePref: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  clientAppName: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  clientAppOrg: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  clientAppVersion: string;
}

class OpSvcRsBodyDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  rrn: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  traceNumb: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  authIDResponse: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  responseCode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  transactionAmount: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  currencyCode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  acqInstID: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  captureDate: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  settlementDate: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  MCC: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  cardEntryMode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  track2: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  terminalId: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  cardIssRespData: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  additionalInfo: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  invoiceData: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  pvtData: string;
}

export class ResponseFullDto {
  @ValidateNested()
  @Type(() => OpSvcRsHeaderDto)
  @IsObject()
  @IsNotEmpty()
  opSvcRsHeader: OpSvcRsHeaderDto;

  @Type(() => OpSvcRsBodyDto)
  @IsObject()
  @IsNotEmpty()
  opSvcRsBody: OpSvcRsBodyDto;
}
