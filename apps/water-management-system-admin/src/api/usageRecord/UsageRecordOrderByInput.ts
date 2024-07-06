import { SortOrder } from "../../util/SortOrder";

export type UsageRecordOrderByInput = {
  amountUsed?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
