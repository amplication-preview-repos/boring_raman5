import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UsageRecordWhereInput = {
  amountUsed?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
