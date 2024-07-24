import { MessageTRX } from '../impl/components/transMessage/messageTRX';
import { TrxContentDto } from '../impl/components/dto/TrxContentDto';
import { SchemaTrxSendKafkaDto } from '../impl/components/schemasSendKafkaDto/SchemaTrxSendKafkaDto';

describe('MessageTRX', () => {
  let messageTRX: MessageTRX;

  beforeEach(() => {
    messageTRX = new MessageTRX();
  });

  it('should transform TrxContentDto to SchemaTrxSendKafkaDto', () => {
    const trxContentDto: TrxContentDto = {
      idPago: '1603b7f5-debe-4452-af71-6abb9938db73',
      idTerminal: 'n005cs23',
      codigoAutorizacion: '958338',
      idComercio: '876065401676',
      fecha: '2024-07-12:12:19:36.951',
      estado: 'PAGADO',
      rrn: '765510425533',
      operacion: 'MPURCHASE',
      datosComercio: {
        MCC: '5499',
        ciudadComercio: 'Valdivia',
        clientAppOrg: 'Registro venta masiva',
        comunaComercio: 'Valdivia',
        dv: '1',
        idComercio: '876065401676',
        paisComercio: 'Chile',
        rut: '87606540',
      },
      datosPago: {
        cuotas: '00',
        propina: 255,
        monto: 2810,
        iva: 408,
        neto: 2147,
        totalExento: 0,
        tipoComprobante: 'Boleta afecta',
        tipoCuota: '0',
      },
      datosSucursal: {
        comunaSucursal: 'Valdivia',
        direccionSucursal: 'Independencia   455',
        idSucursal: 'a3Z8L000000HJPNUA4',
        idSucursalOP: '876065400705',
        nombreSucursal: 'pruebavmasiva47@yopmail.com',
        paisSucursal: 'Chile',
        regionSucursal: 'Los Rios',
      },
      secureFields: {
        pinBlock: 'AD5AC050F3334591',
        pinblockKsn: 'FFFFFF982821420001C0',
        track2: '44EA0D9DE9BBCC2A6B4DD55714E37491198ED76273D32EFA6C6031E19414D3ECF381AE7E17A7F8A4',
        track2ksn: 'FFFFFF982821420001BF',
      },
      datosTarjeta: {
        bin: '451368',
        abreviatura: 'VI',
        marca: 'VISA',
        cardEntryMode: '071',
        cardSeqNumb: '01',
        tipo: 'D',
        conditionCode: '00',
        fourDigits: '4001',
        invoiceData: '55555',
      },
      fechaUTC: '2024-07-12:15:19:36.960',
      fechaAnulacion: 'NA',
      infoAdicionalPOS: {
        canal: 'RED_MOVIL',
        card_entry: 'CTLS',
        portador: 'ENTEL',
        serial_number: 'N860W104940',
        sim_id: '89560100001257725568',
        version_app: '3.0.3.qa',
        bins: { date_file: '12-01-2023', date_update: '12-01-2023', record_count: 1530, version: 66 },
        emv_aid: { date_file: '01-01-2000', date_update: '01-01-2000', record_count: 0, version: 77 },
        emv_capk: { date_file: '01-01-2000', date_update: '01-01-2000', record_count: 0, version: 22 },
        errors: { date_file: '15-02-2023', date_update: '15-02-2023', record_count: 0, version: 89 },
        propinaActiva: true,
      },
      fechaDia: '2024-07-12',
      numeroSerie: 'N860W104940',
      diaNumSerie: '2024-07-12|N860W104940',
      diaNumSerieEstado: '2024-07-12|N860W104940|PAGADO',
      log: [],
      attendant: 'NA',
      idAlianza: 'NA',
    };

    const expected: SchemaTrxSendKafkaDto = {
      estado: 'PAGADO',
      infpospropinaact: true,
      infpossimid: '89560100001257725568',
      datpagtipcomp: 'Boleta afecta',
      dattarjcondcode: '00',
      infoadposemvcapkver: 22,
      infoadposemvaidver: 77,
      datsucnombre: 'pruebavmasiva47@yopmail.com',
      dattarjentrymode: '071',
      dattarjfourdig: '4001',
      fechaanul: 'NA',
      datcomerrut: '87606540',
      tipopago: 'Tarjeta',
      datpagmonto: 2810,
      infoadposbinsdateu: '12-01-2023',
      datcomermcc: '5499',
      rrn: '765510425533',
      datcomerciudad: 'Valdivia',
      fecha: '2024-07-12:12:19:36.951',
      secfldtrack2ksn: 'FFFFFF982821420001BF',
      dattarjseqnum: '01',
      dattarjtipo: 'D',
      infoadposbinsreccnt: 1530,
      infoadposbinsdatef: '12-01-2023',
      infposportador: 'ENTEL',
      dianumser: '2024-07-12|N860W104940',
      fechadia: '2024-07-12',
      atendedor: 'NA',
      datcomerdv: '1',
      datpagpropina: 255,
      infoadposemvcapkdateu: '01-01-2000',
      numser: 'N860W104940',
      datsucpais: 'Chile',
      infposversionapp: '3.0.3.qa',
      datsucdireccion: 'Independencia   455',
      datsucid: 'a3Z8L000000HJPNUA4',
      infoadposemvaiddateu: '01-01-2000',
      dianumserest: '2024-07-12|N860W104940|PAGADO',
      datsuccomuna: 'Valdivia',
      datpagiva: 408,
      datpagneto: 2147,
      idpago: '1603b7f5-debe-4452-af71-6abb9938db73',
      datsucidop: '876065400705',
      datcomerpais: 'Chile',
      infoadposemvaiddatef: '01-01-2000',
      infposerrversion: 89,
      dattarjinvdata: '55555',
      infposcanal: 'RED_MOVIL',
      infposerrdateupdate: '15-02-2023',
      codigoautorizacion: '958338',
      infoadposbinsver: 66,
      idterm: 'n005cs23',
      fechautc: '2024-07-12:15:19:36.960',
      datpagcuotas: '00',
      infposerrdatefile: '15-02-2023',
      datcomerapporg: 'Registro venta masiva',
      idcom: '876065401676',
      datcomercomuna: 'Valdivia',
      datsucregion: 'Los Rios',
      dattarjabrev: 'VI',
      secfldtrack2: '44EA0D9DE9BBCC2A6B4DD55714E37491198ED76273D32EFA6C6031E19414D3ECF381AE7E17A7F8A4',
      infoadposemvcapkdatef: '01-01-2000',
      datpagtotexent: 0,
      infposcardentry: 'CTLS',
      oper: 'MPURCHASE',
      dattarjbin: '451368',
      dattarjmarca: 'VISA',
    };

    const result = messageTRX.transform(trxContentDto);

    expect(result).toEqual(expected);
  });
});
