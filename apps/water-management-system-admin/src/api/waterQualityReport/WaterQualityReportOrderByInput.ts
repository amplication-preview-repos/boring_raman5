import { SortOrder } from "../../util/SortOrder";

export type WaterQualityReportOrderByInput = {
  contaminants?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  phLevel?: SortOrder;
  reportDate?: SortOrder;
  reservoirId?: SortOrder;
  updatedAt?: SortOrder;
};
