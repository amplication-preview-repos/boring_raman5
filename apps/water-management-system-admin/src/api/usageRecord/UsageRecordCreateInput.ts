import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UsageRecordCreateInput = {
  amountUsed?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
