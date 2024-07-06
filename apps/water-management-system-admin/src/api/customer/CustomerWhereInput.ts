import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsageRecordListRelationFilter } from "../usageRecord/UsageRecordListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  usageRecords?: UsageRecordListRelationFilter;
};
