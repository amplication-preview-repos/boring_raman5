import { WaterQualityReport as TWaterQualityReport } from "../api/waterQualityReport/WaterQualityReport";

export const WATERQUALITYREPORT_TITLE_FIELD = "id";

export const WaterQualityReportTitle = (
  record: TWaterQualityReport
): string => {
  return record.id?.toString() || String(record.id);
};
