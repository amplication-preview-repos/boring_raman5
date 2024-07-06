import { WaterQualityReport } from "../waterQualityReport/WaterQualityReport";

export type Reservoir = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
  waterLevel: number | null;
  waterQualityReports?: Array<WaterQualityReport>;
};
