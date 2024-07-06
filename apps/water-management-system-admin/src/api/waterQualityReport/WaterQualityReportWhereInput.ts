import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ReservoirWhereUniqueInput } from "../reservoir/ReservoirWhereUniqueInput";

export type WaterQualityReportWhereInput = {
  contaminants?: StringNullableFilter;
  id?: StringFilter;
  phLevel?: FloatNullableFilter;
  reportDate?: DateTimeNullableFilter;
  reservoir?: ReservoirWhereUniqueInput;
};
