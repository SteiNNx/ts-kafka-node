import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class SchemaTrxSendKafkaDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  estado: string;

  @IsBoolean()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? false)
  infpospropinaact: boolean;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infpossimid: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datpagtipcomp: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjcondcode: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  infoadposemvcapkver: number;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  infoadposemvaidver: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsucnombre: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjentrymode: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjfourdig: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechaanul: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomerrut: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  tipopago: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  datpagmonto: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infoadposbinsdateu: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomermcc: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  rrn: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomerciudad: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fecha: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  secfldtrack2ksn: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjseqnum: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjtipo: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  infoadposbinsreccnt: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infoadposbinsdatef: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infposportador: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dianumser: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechadia: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  atendedor: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomerdv: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  datpagpropina: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infoadposemvcapkdateu: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  numser: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsucpais: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infposversionapp: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsucdireccion: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsucid: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infoadposemvaiddateu: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dianumserest: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsuccomuna: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  datpagiva: number;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  datpagneto: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  idpago: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsucidop: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomerpais: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infoadposemvaiddatef: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  infposerrversion: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjinvdata: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infposcanal: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infposerrdateupdate: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  codigoautorizacion: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  infoadposbinsver: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  idterm: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  fechautc: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datpagcuotas: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infposerrdatefile: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomerapporg: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  idcom: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datcomercomuna: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  datsucregion: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjabrev: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  secfldtrack2: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infoadposemvcapkdatef: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  datpagtotexent: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  infposcardentry: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  oper: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjbin: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value ?? 'NA')
  dattarjmarca: string;
}
