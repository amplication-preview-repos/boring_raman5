import { Module } from "@nestjs/common";
import { UsageRecordModuleBase } from "./base/usageRecord.module.base";
import { UsageRecordService } from "./usageRecord.service";
import { UsageRecordController } from "./usageRecord.controller";
import { UsageRecordResolver } from "./usageRecord.resolver";

@Module({
  imports: [UsageRecordModuleBase],
  controllers: [UsageRecordController],
  providers: [UsageRecordService, UsageRecordResolver],
  exports: [UsageRecordService],
})
export class UsageRecordModule {}
