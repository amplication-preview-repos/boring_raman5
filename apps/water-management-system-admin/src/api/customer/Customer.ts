import { UsageRecord } from "../usageRecord/UsageRecord";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
  usageRecords?: Array<UsageRecord>;
};
