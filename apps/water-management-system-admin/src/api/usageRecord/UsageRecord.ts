import { Customer } from "../customer/Customer";

export type UsageRecord = {
  amountUsed: number | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
