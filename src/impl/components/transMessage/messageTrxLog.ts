import { Injectable } from '@nestjs/common';
import { SchemaTrxLogSendKafkaDto } from '../schemasSendKafkaDto/SchemaTrxLogSendKafkaDto';
import { LogItemDto } from '../dto/LogItemDto';

@Injectable()
export class MessageTrxLog {
  private transformItem(log: LogItemDto): SchemaTrxLogSendKafkaDto {
    return {
      infposemvaiddatefile: log.infoAdicionalPOS.emv_aid.date_file ?? 'NA',
      respfullcapdate: log.responseFull.opSvcRsBody.captureDate ?? 'NA',
      estado: log.estado ?? 'NA',
      infposemvcapkdateupdate: log.infoAdicionalPOS.emv_capk.date_update,
      infpossimid: log.infoAdicionalPOS.sim_id,
      respfulltransamt: log.responseFull.opSvcRsBody.transactionAmount,
      respfulltrack2: log.responseFull.opSvcRsBody.track2,
      respfullhdrseverity: log.responseFull.opSvcRsHeader.severity,
      respfullacqinstid: log.responseFull.opSvcRsBody.acqInstID,
      respfullauthidresp: log.responseFull.opSvcRsBody.authIDResponse,
      respstatuscode: log.response.statusCode,
      statuscode: log.response.statusCode,
      infposemvaidversion: log.infoAdicionalPOS.emv_aid.version,
      respfullcurrcode: log.responseFull.opSvcRsBody.currencyCode,
      infposemvcapkdatefile: log.infoAdicionalPOS.emv_capk.date_file,
      respfulltermid: log.responseFull.opSvcRsBody.terminalId,
      respfullhdrcliappname: log.responseFull.opSvcRsHeader.clientAppName,
      authidresp: log.responseFull.opSvcRsBody.authIDResponse,
      infposserialnumber: log.infoAdicionalPOS.serial_number,
      infpospropinaactiva: log.infoAdicionalPOS.propinaActiva,
      infposbinsrecordcount: log.infoAdicionalPOS.bins.record_count,
      infposerrorsdateupdate: log.infoAdicionalPOS.errors.date_update,
      respfullhdrservdatetime: log.responseFull.opSvcRsHeader.serverDateTime,
      respfullsettldate: log.responseFull.opSvcRsBody.settlementDate,
      respfullhdroptype: log.responseFull.opSvcRsHeader.operationType,

      tipopago: (() => {
        switch (log.infoAdicionalPOS.card_entry) {
          case 'MSR':
          case 'CT':
          case 'CTLS':
            return 'Tarjeta';
          default:
            return '0000';
        }
      })(),

      infposemvcapkversion: log.infoAdicionalPOS.emv_capk.version,
      respseverity: log.response.severity,
      respcliappvers: log.response.clientAppVersion,
      rrn: log.rrn,
      respfullhdrcliapporg: log.responseFull.opSvcRsHeader.clientAppOrg,
      infposverapp: log.infoAdicionalPOS.version_app,
      respcustlangpref: log.response.customerLanguagePref,
      infposportador: log.infoAdicionalPOS.portador,
      posreq: JSON.stringify(log.POSrequest),
      fecanul: log.fechas.fechaAnulacion,
      infposbinsdatefile: log.infoAdicionalPOS.bins.date_file,
      respfullcardentry: log.responseFull.opSvcRsBody.cardEntryMode,
      fecposutc: log.fechas.fechaPOSUTC,
      respfullhdrstatuscode: log.responseFull.opSvcRsHeader.statusCode,
      infposbinsversion: log.infoAdicionalPOS.bins.version,
      infposemvaiddateupdate: log.infoAdicionalPOS.emv_aid.date_update,
      respservdatetime: log.response.serverDateTime,
      fecapiutc: log.fechas.fechaAPIUTC,
      respfullhdrcliappver: log.responseFull.opSvcRsHeader.clientAppVersion,
      statusdesc: log.response.statusDescription,
      respfullrespcode: log.responseFull.opSvcRsBody.responseCode,
      respfullhdrrquid: log.responseFull.opSvcRsHeader.rqUID,
      idpago: log.idPago,
      respfullmcc: log.responseFull.opSvcRsBody.MCC,
      respfulltracenum: log.responseFull.opSvcRsBody.traceNumb,
      infposbinsdateupdate: log.infoAdicionalPOS.bins.date_update,
      respfullhdrcustlangpref: log.responseFull.opSvcRsHeader.customerLanguagePref,
      infposcanal: log.infoAdicionalPOS.canal,
      fecposloc: log.fechas.fechaPOSLocal,
      infposerrorsdatefile: log.infoAdicionalPOS.errors.date_file,
      respcliapporg: log.response.clientAppOrg,
      respfullpvtdata: log.responseFull.opSvcRsBody.pvtData,
      respfullhdrstatusdesc: log.responseFull.opSvcRsHeader.statusDescription,
      fecapiloc: log.fechas.fechaAPILocal,
      respstatusdesc: log.response.statusDescription,
      respfullcardissresp: log.responseFull.opSvcRsBody.cardIssRespData,
      respfullinvdata: log.responseFull.opSvcRsBody.invoiceData,
      respfullrrn: log.responseFull.opSvcRsBody.rrn,
      respcliappname: log.response.clientAppName,
      reqsent: JSON.stringify(log.requestSent),
      infposcardentry: log.infoAdicionalPOS.card_entry,
      respfulladdinfo: log.responseFull.opSvcRsBody.additionalInfo,
      infposerrorsversion: log.infoAdicionalPOS.errors.version,
    };
  }

  transform(logs: LogItemDto[]): SchemaTrxLogSendKafkaDto[] {
    return logs.map((log) => this.transformItem(log));
  }
}
