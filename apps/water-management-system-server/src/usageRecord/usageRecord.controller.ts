import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsageRecordService } from "./usageRecord.service";
import { UsageRecordControllerBase } from "./base/usageRecord.controller.base";

@swagger.ApiTags("usageRecords")
@common.Controller("usageRecords")
export class UsageRecordController extends UsageRecordControllerBase {
  constructor(protected readonly service: UsageRecordService) {
    super(service);
  }
}
