import { ReservoirWhereUniqueInput } from "../reservoir/ReservoirWhereUniqueInput";

export type WaterQualityReportUpdateInput = {
  contaminants?: string | null;
  phLevel?: number | null;
  reportDate?: Date | null;
  reservoir?: ReservoirWhereUniqueInput | null;
};
