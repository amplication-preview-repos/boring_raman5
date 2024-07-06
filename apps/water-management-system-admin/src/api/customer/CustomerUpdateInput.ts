import { UsageRecordUpdateManyWithoutCustomersInput } from "./UsageRecordUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  usageRecords?: UsageRecordUpdateManyWithoutCustomersInput;
};
