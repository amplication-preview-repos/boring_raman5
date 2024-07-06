import { UsageRecord as TUsageRecord } from "../api/usageRecord/UsageRecord";

export const USAGERECORD_TITLE_FIELD = "id";

export const UsageRecordTitle = (record: TUsageRecord): string => {
  return record.id?.toString() || String(record.id);
};
