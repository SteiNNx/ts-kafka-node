import 'reflect-metadata';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { SchemaTrxSendKafkaDto } from '../impl/components/schemasSendKafkaDto/SchemaTrxSendKafkaDto';

describe('SchemaTrxSendKafkaDto', () => {
  it('should validate correctly', async () => {
    const validData = {
      estado: 'someEstado',
      infpospropinaact: true,
      infpossimid: 'someSimId',
      datpagtipcomp: 'someTipComp',
      dattarjcondcode: 'someCondCode',
      infoadposemvcapkver: 1,
      infoadposemvaidver: 2,
      datsucnombre: 'someNombre',
      dattarjentrymode: 'someEntryMode',
      dattarjfourdig: '1234',
      fechaanul: '2024-07-12',
      datcomerrut: 'someRut',
      tipopago: 'someTipoPago',
      datpagmonto: 100,
      infoadposbinsdateu: '2024-07-12',
      datcomermcc: 'someMCC',
      rrn: 'someRRN',
      datcomerciudad: 'someCiudad',
      fecha: '2024-07-12',
      secfldtrack2ksn: 'someKSN',
      dattarjseqnum: '01',
      dattarjtipo: 'D',
      infoadposbinsreccnt: 100,
      infoadposbinsdatef: '2024-07-12',
      infposportador: 'somePortador',
      dianumser: 'someNumSer',
      fechadia: '2024-07-12',
      atendedor: 'someAtendedor',
      datcomerdv: 'someDV',
      datpagpropina: 10,
      infoadposemvcapkdateu: '2024-07-12',
      numser: 'someNumSer',
      datsucpais: 'somePais',
      infposversionapp: 'someVersionApp',
      datsucdireccion: 'someDireccion',
      datsucid: 'someId',
      infoadposemvaiddateu: '2024-07-12',
      dianumserest: 'someNumSerEst',
      datsuccomuna: 'someComuna',
      datpagiva: 10,
      datpagneto: 90,
      idpago: 'someIdPago',
      datsucidop: 'someIdOp',
      datcomerpais: 'somePais',
      infoadposemvaiddatef: '2024-07-12',
      infposerrversion: 1,
      dattarjinvdata: 'someInvData',
      infposcanal: 'someCanal',
      infposerrdateupdate: '2024-07-12',
      codigoautorizacion: 'someAuthCode',
      infoadposbinsver: 1,
      idterm: 'someIdTerm',
      fechautc: '2024-07-12T15:00:00Z',
      datpagcuotas: '01',
      infposerrdatefile: '2024-07-12',
      datcomerapporg: 'someAppOrg',
      idcom: 'someIdCom',
      datcomercomuna: 'someComuna',
      datsucregion: 'someRegion',
      dattarjabrev: 'someAbrev',
      secfldtrack2: 'someTrack2',
      infoadposemvcapkdatef: '2024-07-12',
      datpagtotexent: 0,
      infposcardentry: 'someEntry',
      oper: 'someOper',
      dattarjbin: '123456',
      dattarjmarca: 'someMarca',
    };

    const dtoInstance = plainToInstance(SchemaTrxSendKafkaDto, validData);
    const errors = await validate(dtoInstance);

    expect(errors.length).toBe(0);
  });

  it('should invalidate empty fields', async () => {
    const invalidData = {};

    const dtoInstance = plainToInstance(SchemaTrxSendKafkaDto, invalidData);
    const errors = await validate(dtoInstance);

    expect(errors.length).toBeGreaterThan(0);

    // Check a few specific errors
    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'estado',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );

    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'infpospropinaact',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );
  });
});
