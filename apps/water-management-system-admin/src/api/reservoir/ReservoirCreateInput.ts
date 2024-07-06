import { WaterQualityReportCreateNestedManyWithoutReservoirsInput } from "./WaterQualityReportCreateNestedManyWithoutReservoirsInput";

export type ReservoirCreateInput = {
  capacity?: number | null;
  location?: string | null;
  name?: string | null;
  waterLevel?: number | null;
  waterQualityReports?: WaterQualityReportCreateNestedManyWithoutReservoirsInput;
};
