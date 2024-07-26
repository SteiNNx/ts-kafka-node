import 'reflect-metadata';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { KafkaMessageDto } from '../impl/components/dto/Kafka-message.dto';

describe('KafkaMessageDto', () => {
  it('should validate correctly', async () => {
    const validData = {
      level: 30,
      time: 1620801179486,
      name: 'paymentModel',
      pago: {
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
        log: [
          {
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
              fechaAnulacion: null,
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
              attendant: '0',
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
          },
        ],
        attendant: '0',
        idAlianza: 'NA',
      },
      msg: 'Transaction completed',
    };

    const dtoInstance = plainToInstance(KafkaMessageDto, validData);
    const errors = await validate(dtoInstance);

    expect(errors.length).toBe(0);
  });

  it('should invalidate empty fields', async () => {
    const invalidData = {
      level: null,
      time: null,
      name: '',
      pago: null,
      msg: '',
    };

    const dtoInstance = plainToInstance(KafkaMessageDto, invalidData);
    const errors = await validate(dtoInstance);

    expect(errors.length).toBeGreaterThan(0);

    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'level',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );
    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'time',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );
    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'name',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );
    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'pago',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );
    expect(errors).toContainEqual(
      expect.objectContaining({
        property: 'msg',
        constraints: expect.objectContaining({
          isNotEmpty: expect.any(String),
        }),
      })
    );
  });
});
