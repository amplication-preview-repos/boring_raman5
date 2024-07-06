import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WaterQualityReportService } from "./waterQualityReport.service";
import { WaterQualityReportControllerBase } from "./base/waterQualityReport.controller.base";

@swagger.ApiTags("waterQualityReports")
@common.Controller("waterQualityReports")
export class WaterQualityReportController extends WaterQualityReportControllerBase {
  constructor(protected readonly service: WaterQualityReportService) {
    super(service);
  }
}
