import { UsageRecordCreateNestedManyWithoutCustomersInput } from "./UsageRecordCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  usageRecords?: UsageRecordCreateNestedManyWithoutCustomersInput;
};
