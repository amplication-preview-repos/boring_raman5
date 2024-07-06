import { Reservoir } from "../reservoir/Reservoir";

export type WaterQualityReport = {
  contaminants: string | null;
  createdAt: Date;
  id: string;
  phLevel: number | null;
  reportDate: Date | null;
  reservoir?: Reservoir | null;
  updatedAt: Date;
};
