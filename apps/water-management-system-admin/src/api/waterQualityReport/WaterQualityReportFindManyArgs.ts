import { WaterQualityReportWhereInput } from "./WaterQualityReportWhereInput";
import { WaterQualityReportOrderByInput } from "./WaterQualityReportOrderByInput";

export type WaterQualityReportFindManyArgs = {
  where?: WaterQualityReportWhereInput;
  orderBy?: Array<WaterQualityReportOrderByInput>;
  skip?: number;
  take?: number;
};
