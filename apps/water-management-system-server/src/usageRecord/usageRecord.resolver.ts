import * as graphql from "@nestjs/graphql";
import { UsageRecordResolverBase } from "./base/usageRecord.resolver.base";
import { UsageRecord } from "./base/UsageRecord";
import { UsageRecordService } from "./usageRecord.service";

@graphql.Resolver(() => UsageRecord)
export class UsageRecordResolver extends UsageRecordResolverBase {
  constructor(protected readonly service: UsageRecordService) {
    super(service);
  }
}
