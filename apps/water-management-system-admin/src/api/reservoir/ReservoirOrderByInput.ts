import { SortOrder } from "../../util/SortOrder";

export type ReservoirOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  waterLevel?: SortOrder;
};
