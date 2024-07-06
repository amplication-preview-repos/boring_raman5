import { UsageRecordWhereInput } from "./UsageRecordWhereInput";
import { UsageRecordOrderByInput } from "./UsageRecordOrderByInput";

export type UsageRecordFindManyArgs = {
  where?: UsageRecordWhereInput;
  orderBy?: Array<UsageRecordOrderByInput>;
  skip?: number;
  take?: number;
};
