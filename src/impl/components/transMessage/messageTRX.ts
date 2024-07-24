import { Injectable } from '@nestjs/common';
import { TrxContentDto } from '../dto/TrxContentDto';
import { SchemaTrxSendKafkaDto } from '../schemasSendKafkaDto/SchemaTrxSendKafkaDto';

@Injectable()
export class MessageTRX {
  transform(trx: TrxContentDto) {
    const retTrxSend = new SchemaTrxSendKafkaDto();
    retTrxSend.estado = trx.estado;
    retTrxSend.infpospropinaact = trx.infoAdicionalPOS.propinaActiva;
    retTrxSend.infpossimid = trx.infoAdicionalPOS.sim_id;
    retTrxSend.datpagtipcomp = trx.datosPago.tipoComprobante;
    retTrxSend.dattarjcondcode = trx.datosTarjeta.conditionCode;
    retTrxSend.infoadposemvcapkver = trx.infoAdicionalPOS.emv_capk.version;
    retTrxSend.infoadposemvaidver = trx.infoAdicionalPOS.emv_aid.version;
    retTrxSend.datsucnombre = trx.datosSucursal.nombreSucursal;
    retTrxSend.dattarjentrymode = trx.datosTarjeta.cardEntryMode;
    retTrxSend.dattarjfourdig = trx.datosTarjeta.fourDigits;
    retTrxSend.fechaanul = trx.fechaAnulacion;
    retTrxSend.datcomerrut = trx.datosComercio.rut;

    retTrxSend.tipopago = (() => {
      switch (trx.infoAdicionalPOS.card_entry) {
        case 'MSR':
        case 'CT':
        case 'CTLS':
          return 'Tarjeta';
        default:
          return '0000';
      }
    })();

    retTrxSend.datpagmonto = trx.datosPago.monto;
    retTrxSend.infoadposbinsdateu = trx.infoAdicionalPOS.bins.date_update;
    retTrxSend.datcomermcc = trx.datosComercio.MCC;
    retTrxSend.rrn = trx.rrn;
    retTrxSend.datcomerciudad = trx.datosComercio.ciudadComercio;
    retTrxSend.fecha = trx.fecha;
    retTrxSend.secfldtrack2ksn = trx.secureFields.track2ksn;
    retTrxSend.dattarjseqnum = trx.datosTarjeta.cardSeqNumb;
    retTrxSend.dattarjtipo = trx.datosTarjeta.tipo;
    retTrxSend.infoadposbinsreccnt = trx.infoAdicionalPOS.bins.record_count;
    retTrxSend.infoadposbinsdatef = trx.infoAdicionalPOS.bins.date_file;
    retTrxSend.infposportador = trx.infoAdicionalPOS.portador;
    retTrxSend.dianumser = trx.diaNumSerie;
    retTrxSend.fechadia = trx.fechaDia;
    retTrxSend.atendedor = trx.attendant;
    retTrxSend.datcomerdv = trx.datosComercio.dv;
    retTrxSend.datpagpropina = trx.datosPago.propina;
    retTrxSend.infoadposemvcapkdateu = trx.infoAdicionalPOS.emv_capk.date_update;
    retTrxSend.numser = trx.numeroSerie;
    retTrxSend.datsucpais = trx.datosSucursal.paisSucursal;
    retTrxSend.infposversionapp = trx.infoAdicionalPOS.version_app;
    retTrxSend.datsucdireccion = trx.datosSucursal.direccionSucursal;
    retTrxSend.datsucid = trx.datosSucursal.idSucursal;
    retTrxSend.infoadposemvaiddateu = trx.infoAdicionalPOS.emv_aid.date_update;
    retTrxSend.dianumserest = trx.diaNumSerieEstado;
    retTrxSend.datsuccomuna = trx.datosSucursal.comunaSucursal;
    retTrxSend.datpagiva = trx.datosPago.iva;
    retTrxSend.datpagneto = trx.datosPago.neto;
    retTrxSend.idpago = trx.idPago;
    retTrxSend.datsucidop = trx.datosSucursal.idSucursalOP;
    retTrxSend.datcomerpais = trx.datosComercio.paisComercio;
    retTrxSend.infoadposemvaiddatef = trx.infoAdicionalPOS.emv_aid.date_file;
    retTrxSend.infposerrversion = trx.infoAdicionalPOS.errors.version;
    retTrxSend.dattarjinvdata = trx.datosTarjeta.invoiceData;
    retTrxSend.infposcanal = trx.infoAdicionalPOS.canal;
    retTrxSend.infposerrdateupdate = trx.infoAdicionalPOS.errors.date_update;
    retTrxSend.codigoautorizacion = trx.codigoAutorizacion;
    retTrxSend.infoadposbinsver = trx.infoAdicionalPOS.bins.version;
    retTrxSend.idterm = trx.idTerminal;
    retTrxSend.fechautc = trx.fechaUTC;
    retTrxSend.datpagcuotas = trx.datosPago.cuotas;
    retTrxSend.infposerrdatefile = trx.infoAdicionalPOS.errors.date_file;
    retTrxSend.datcomerapporg = trx.datosComercio.clientAppOrg;
    retTrxSend.idcom = trx.idComercio;
    retTrxSend.datcomercomuna = trx.datosComercio.comunaComercio;
    retTrxSend.datsucregion = trx.datosSucursal.regionSucursal;
    retTrxSend.dattarjabrev = trx.datosTarjeta.abreviatura;
    retTrxSend.secfldtrack2 = trx.secureFields.track2;
    retTrxSend.infoadposemvcapkdatef = trx.infoAdicionalPOS.emv_capk.date_file;
    retTrxSend.datpagtotexent = trx.datosPago.totalExento;
    retTrxSend.infposcardentry = trx.infoAdicionalPOS.card_entry;
    retTrxSend.oper = trx.operacion;
    retTrxSend.dattarjbin = trx.datosTarjeta.bin;
    retTrxSend.dattarjmarca = trx.datosTarjeta.marca;

    return retTrxSend;
  }
}
