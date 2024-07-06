import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WaterQualityReportListRelationFilter } from "../waterQualityReport/WaterQualityReportListRelationFilter";

export type ReservoirWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  waterLevel?: IntNullableFilter;
  waterQualityReports?: WaterQualityReportListRelationFilter;
};
