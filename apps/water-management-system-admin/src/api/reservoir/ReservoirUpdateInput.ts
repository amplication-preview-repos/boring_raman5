import { WaterQualityReportUpdateManyWithoutReservoirsInput } from "./WaterQualityReportUpdateManyWithoutReservoirsInput";

export type ReservoirUpdateInput = {
  capacity?: number | null;
  location?: string | null;
  name?: string | null;
  waterLevel?: number | null;
  waterQualityReports?: WaterQualityReportUpdateManyWithoutReservoirsInput;
};
