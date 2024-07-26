import { IsString, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';

class DataReferenceDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  Field: string;
}
class ReferenceListDto {
  @ValidateNested()
  @Type(() => DataReferenceDto)
  @IsObject()
  @IsNotEmpty()
  DataReference: DataReferenceDto;
}
class CipherDataDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  CipherValue: string;
}

class KeyIdentifierDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  ValueType: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  EncodingType: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  Value: string;
}

class SecurityTokenReferenceDto {
  @ValidateNested()
  @Type(() => KeyIdentifierDto)
  @IsObject()
  @IsNotEmpty()
  KeyIdentifier: KeyIdentifierDto;
}

class KeyInfoDto {
  @ValidateNested()
  @Type(() => SecurityTokenReferenceDto)
  @IsObject()
  @IsNotEmpty()
  SecurityTokenReference: SecurityTokenReferenceDto;
}

class EncryptionMethodDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  Algorithm: string;
}
class EncryptedKeyDto {
  @ValidateNested()
  @Type(() => EncryptionMethodDto)
  @IsObject()
  @IsNotEmpty()
  EncryptionMethod: EncryptionMethodDto;

  @ValidateNested()
  @Type(() => KeyInfoDto)
  @IsObject()
  @IsNotEmpty()
  KeyInfo: KeyInfoDto;

  @ValidateNested()
  @Type(() => CipherDataDto)
  @IsObject()
  @IsNotEmpty()
  CipherData: CipherDataDto;

  @ValidateNested()
  @Type(() => ReferenceListDto)
  @IsObject()
  @IsNotEmpty()
  ReferenceList: ReferenceListDto;
}

class SecurityDto {
  @ValidateNested()
  @Type(() => EncryptedKeyDto)
  @IsObject()
  @IsNotEmpty()
  EncryptedKey: EncryptedKeyDto;
}

class OPRequestDto {
  @ValidateNested()
  @Type(() => SecurityDto)
  @IsObject()
  @IsNotEmpty()
  Security: SecurityDto;
}

class OpSvcRqHeaderDto {
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
  clientDateTime: string;

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

class TerminalInfoDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  id: string;
}

class MerchantInfoDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  merchantID: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  city: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  country: string;
}

class OpSvcRqBodyDto {
  @ValidateNested()
  @Type(() => TerminalInfoDto)
  @IsObject()
  @IsNotEmpty()
  terminalInfo: TerminalInfoDto;

  @ValidateNested()
  @Type(() => MerchantInfoDto)
  @IsObject()
  @IsNotEmpty()
  merchantInfo: MerchantInfoDto;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  transactionAmount: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  track2: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  rrn: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  currencyCode: string;

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
  pinBlock: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  cardSeqNumb: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  posConditionCode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  txnOrigin: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  retailerData: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  invoiceData: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  settlementData: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  pvtData: string;

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
  acqInstID: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  captureDate: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  ProcessingCode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  UTCTime: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  pinblockKsn: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  track2ksn: string;
}

export class RequestSentDto {
  @ValidateNested()
  @Type(() => OPRequestDto)
  @IsObject()
  @IsNotEmpty()
  OPRequest: OPRequestDto;

  @ValidateNested()
  @Type(() => OpSvcRqHeaderDto)
  @IsObject()
  @IsNotEmpty()
  opSvcRqHeader: OpSvcRqHeaderDto;

  @ValidateNested()
  @Type(() => OpSvcRqBodyDto)
  @IsObject()
  @IsNotEmpty()
  opSvcRqBody: OpSvcRqBodyDto;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  sucursalID: string;
}
