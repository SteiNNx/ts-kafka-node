export interface KafkaMessage {
    UTCTimeFormat: string;
    additionalInfo: string;
    attendant: string;
    currencyCode: string;
    datosComercio: {
      MCC: string;
      ciudadComercio: string;
      clientAppOrg: string;
      comunaComercio: string;
      dv: string;
      idComercio: string;
      paisComercio: string;
      rut: string;
    };
    datosPago: {
      cuotas: number;
      iva: number;
      monto: number;
      monto_s_prop: number;
      neto: number;
      propina: number;
      tipoComprobante: string;
      tipoCuota: string;
      totalExento: number;
      vuelto: number;
    };
    datosSucursal: {
      comunaSucursal: string;
      direccionSucursal: string;
      idSucursal: string;
      idSucursalOP: string;
      nombreSucursal: string;
      paisSucursal: string;
      regionSucursal: string;
    };
    datosTarjeta: {
      bin: string;
      abreviatura: string;
      marca: string;
      cardEntryMode: string;
      cardSeqNumb: string;
      tipo: string;
      conditionCode: string;
      fourDigits: string;
      invoiceData: string;
    };
    idAlianza: string;
    idPago: string;
    idTerminal: string;
    infoAdicional: {
      canal: string;
      card_entry: string;
      portador: string;
      serial_number: string;
      sim_id: string;
      version_app: string;
      bins: {
        date_file: string;
        date_update: string;
        record_count: number;
        version: number;
      };
      emv_aid: {
        date_file: string;
        date_update: string;
        version: number;
      };
      emv_capk: {
        date_file: string;
        date_update: string;
        version: number;
      };
      errors: {
        date_file: string;
        date_update: string;
        version: number;
      };
      propinaActiva: boolean;
    };
    localDate: string;
    localTime: string;
    localTimeFormat: string;
    millisecDate: string;
    rrn: string;
    secureFields: {
      track2: string;
      track2ksn: string;
    };
  }
  