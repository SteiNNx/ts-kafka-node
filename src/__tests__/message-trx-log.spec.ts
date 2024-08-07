import { MessageTrxLog } from '../impl/components/transMessage/messageTrxLog';
import { LogItemDto } from '../impl/components/dto/LogItemDto';
import { SchemaTrxLogSendKafkaDto } from '../impl/components/schemasSendKafkaDto/SchemaTrxLogSendKafkaDto';

describe('MessageTrxLog', () => {
  let messageTrxLog: MessageTrxLog;

  beforeEach(() => {
    messageTrxLog = new MessageTrxLog();
  });

  it('should transform LogItemDto to SchemaTrxLogSendKafkaDto', () => {
    const logItemDto: LogItemDto = {
      idPago: '1603b7f5-debe-4452-af71-6abb9938db73',
      rrn: '765510425533',
      estado: 'PAGADO',
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
      fechas: {
        fechaPOSLocal: '2024-07-12:12:19:36.951',
        fechaPOSUTC: '2024-07-12:15:19:36.960',
        fechaAPILocal: '2024-07-12:12:19:38.864',
        fechaAPIUTC: '2024-07-12:16:19:38.864',
        fechaAnulacion: 'NA',
      },
      POSrequest: {
        idPago: '1603b7f5-debe-4452-af71-6abb9938db73',
        rrn: '765510425533',
        idTerminal: 'n005cs23',
        captureDate: '0712',
        fecha: '2024-07-12:12:19:36.951',
        fechaUTC: '2024-07-12:15:19:36.960',
        millisecDate: '1720797576959',
        fechaAnulacion: null,
        currencyCode: '152',
        additionalInfo:
          '& 0000700364! B200158 7FF900008000000000002F0396581B173B77000000002810000000000000200003C41521522407120086B1BD07000706021203A0200000000000000000000000000000000000000000000000000000! B400020 071510013F000015080 ! B300080 CF000W104940E040C80000000000000022008C3F00000007A0000000031010000000000000000000! C400012 000000020233! S400020 0100079F6E0420700000! P700002 D ',
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
        idMerchant: '876065401676',
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
        total: 0,
        tipoOperacion: 'MPURCHASE',
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
        idSucursalOP: '876065400705',
        attendant: 'NA',
        idAlianza: 'NA',
      },
      requestSent: {
        OPRequest: {
          Security: {
            EncryptedKey: {
              EncryptionMethod: { Algorithm: 'rsa-1_5' },
              KeyInfo: {
                SecurityTokenReference: {
                  KeyIdentifier: {
                    ValueType: 'X509SubjectKeyIdentifier',
                    EncodingType: 'Base64Binary',
                    Value: 'jdCjOS9nlze8pqzqx+5mh4yIqms=',
                  },
                },
              },
              CipherData: {
                CipherValue:
                  'nDhutGH6IbNDoCGQIRpBgR3CuC2kgxYe3H4QM5l0Oih8f4PIAmvk56RkEZ/lYlCbtVKi5r+R+BVSxKvYimIlYtGe2Ide1weHmADgcLd3lJ7QTkNrmRrINRv6zJuZ0vooRoY2E7a7CZWkk2IiZ4PCw4jUoVu7V+Mmd/g4lBRE4vxsVDXg7c8eHhpWryHi+gEwWGPUDJxm2vNofrSWJG+lzLarHicN2sOWhmX5D+CUpXF3r7bYbOSluiG2p/4M3eFCED/0hPiGtNAWoDP6BMhHfzIr+MFQzW8ucsR+OAbY4QrnZyTgT7i92HlRpHOR102QNlajH0DpaParwUUsIuomvw==',
              },
              ReferenceList: { DataReference: { Field: 'track2' } },
            },
          },
        },
        opSvcRqHeader: {
          rqUID: '1603b7f5-debe-4452-af71-6abb9938db73',
          operationType: 'MPURCHASE',
          clientDateTime: '2024-07-12:12:19:36.951',
          customerLanguagePref: 'en-us',
          clientAppName: 'mPOS',
          clientAppOrg: 'Registro venta masiva',
          clientAppVersion: '1',
        },
        opSvcRqBody: {
          terminalInfo: { id: 'n005cs23' },
          merchantInfo: { merchantID: '876065401676', city: 'Valdivia', country: 'Chile' },
          transactionAmount: '000000002810',
          track2: '44EA0D9DE9BBCC2A6B4DD55714E37491198ED76273D32EFA6C6031E19414D3ECF381AE7E17A7F8A4',
          rrn: '765510425533',
          currencyCode: '152',
          MCC: '5499',
          cardEntryMode: '071',
          pinBlock: 'AD5AC050F3334591',
          cardSeqNumb: '01',
          posConditionCode: '00',
          txnOrigin: 'REGISTRO VENTA MASIVA 11001SANTIAGO11 CL',
          retailerData: '59703837735300000000',
          invoiceData: '55555',
          settlementData: ' VBICIB24 1',
          pvtData:
            '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          cardIssRespData: '00000000000',
          additionalInfo:
            '& 0000700364! B200158 7FF900008000000000002F0396581B173B77000000002810000000000000200003C41521522407120086B1BD07000706021203A0200000000000000000000000000000000000000000000000000000! B400020 071510013F000015080 ! B300080 CF000W104940E040C80000000000000022008C3F00000007A0000000031010000000000000000000! C400012 000000020233! S400020 0100079F6E0420700000! P700002 D ',
          acqInstID: '00000000000',
          captureDate: '0712',
          ProcessingCode: '000000',
          UTCTime: '2024-07-12:15:19:36.960',
          pinblockKsn: 'FFFFFF982821420001C0',
          track2ksn: 'FFFFFF982821420001BF',
        },
        sucursalID: '876065400705',
      },
      responseFull: {
        opSvcRsHeader: {
          rqUID: '1603b7f5-debe-4452-af71-6abb9938db73',
          operationType: 'MPURCHASE',
          statusCode: '00',
          severity: 'SUCCESS',
          statusDescription: 'Transaction approved',
          serverDateTime: '2024-07-12:12:19:36.951',
          customerLanguagePref: 'en-us',
          clientAppName: 'mPOS',
          clientAppOrg: 'Registro venta masiva',
          clientAppVersion: '1',
        },
        opSvcRsBody: {
          rrn: '765510425533',
          traceNumb: '224257',
          authIDResponse: '958338',
          responseCode: '00',
          transactionAmount: '000000002810',
          currencyCode: '152',
          acqInstID: '00000000000',
          captureDate: '0712',
          settlementDate: '0712',
          MCC: '5499',
          cardEntryMode: '071',
          track2: '44EA0D9DE9BBCC2A6B4DD55714E37491198ED76273D32EFA6C6031E19414D3ECF381AE7E17A7F8A4',
          terminalId: 'n005cs23',
          cardIssRespData: '00000000000',
          additionalInfo: '',
          invoiceData: '55555',
          pvtData:
            '0000000000000000000000000000000000000000000000000000000000000000000000000000000-                                       000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        },
      },
      response: {
        statusCode: '00',
        severity: 'SUCCESS',
        statusDescription: 'Transaction approved',
        serverDateTime: '2024-07-12:12:19:36.951',
        customerLanguagePref: 'en-us',
        clientAppName: 'mPOS',
        clientAppOrg: 'Registro venta masiva',
        clientAppVersion: '1',
      },
    };

    const expected: SchemaTrxLogSendKafkaDto = {
      infposemvaiddatefile: '01-01-2000',
      respfullcapdate: '0712',
      estado: 'PAGADO',
      infposemvcapkdateupdate: '01-01-2000',
      infpossimid: '89560100001257725568',
      respfulltransamt: '000000002810',
      respfulltrack2: '44EA0D9DE9BBCC2A6B4DD55714E37491198ED76273D32EFA6C6031E19414D3ECF381AE7E17A7F8A4',
      respfullhdrseverity: 'SUCCESS',
      respfullacqinstid: '00000000000',
      respfullauthidresp: '958338',
      respstatuscode: '00',
      statuscode: '00',
      infposemvaidversion: 77,
      respfullcurrcode: '152',
      infposemvcapkdatefile: '01-01-2000',
      respfulltermid: 'n005cs23',
      respfullhdrcliappname: 'mPOS',
      authidresp: '958338',
      infposserialnumber: 'N860W104940',
      infpospropinaactiva: true,
      infposbinsrecordcount: 1530,
      infposerrorsdateupdate: '15-02-2023',
      respfullhdrservdatetime: '2024-07-12:12:19:36.951',
      respfullsettldate: '0712',
      respfullhdroptype: 'MPURCHASE',
      tipopago: 'Tarjeta',
      infposemvcapkversion: 22,
      respseverity: 'SUCCESS',
      respcliappvers: '1',
      rrn: '765510425533',
      respfullhdrcliapporg: 'Registro venta masiva',
      infposverapp: '3.0.3.qa',
      respcustlangpref: 'en-us',
      infposportador: 'ENTEL',
      posreq: JSON.stringify(logItemDto.POSrequest),
      fecanul: 'NA',
      infposbinsdatefile: '12-01-2023',
      respfullcardentry: '071',
      fecposutc: '2024-07-12:15:19:36.960',
      respfullhdrstatuscode: '00',
      infposbinsversion: 66,
      infposemvaiddateupdate: '01-01-2000',
      respservdatetime: '2024-07-12:12:19:36.951',
      fecapiutc: '2024-07-12:16:19:38.864',
      respfullhdrcliappver: '1',
      statusdesc: 'Transaction approved',
      respfullrespcode: '00',
      respfullhdrrquid: '1603b7f5-debe-4452-af71-6abb9938db73',
      idpago: '1603b7f5-debe-4452-af71-6abb9938db73',
      respfullmcc: '5499',
      respfulltracenum: '224257',
      infposbinsdateupdate: '12-01-2023',
      respfullhdrcustlangpref: 'en-us',
      infposcanal: 'RED_MOVIL',
      fecposloc: '2024-07-12:12:19:36.951',
      infposerrorsdatefile: '15-02-2023',
      respcliapporg: 'Registro venta masiva',
      respfullpvtdata:
        '0000000000000000000000000000000000000000000000000000000000000000000000000000000-                                       000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      respfullhdrstatusdesc: 'Transaction approved',
      fecapiloc: '2024-07-12:12:19:38.864',
      respstatusdesc: 'Transaction approved',
      respfullcardissresp: '00000000000',
      respfullinvdata: '55555',
      respfullrrn: '765510425533',
      respcliappname: 'mPOS',
      reqsent: JSON.stringify(logItemDto.requestSent),
      infposcardentry: 'CTLS',
      respfulladdinfo: '',
      infposerrorsversion: 89,
    };

    const result = messageTrxLog.transform([logItemDto]);
    expect(result).toEqual([expected]);
  });
});
