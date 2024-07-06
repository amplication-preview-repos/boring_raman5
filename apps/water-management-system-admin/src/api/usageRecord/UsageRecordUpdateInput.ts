import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UsageRecordUpdateInput = {
  amountUsed?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
