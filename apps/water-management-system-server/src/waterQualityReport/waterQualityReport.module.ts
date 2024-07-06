import { Module } from "@nestjs/common";
import { WaterQualityReportModuleBase } from "./base/waterQualityReport.module.base";
import { WaterQualityReportService } from "./waterQualityReport.service";
import { WaterQualityReportController } from "./waterQualityReport.controller";
import { WaterQualityReportResolver } from "./waterQualityReport.resolver";

@Module({
  imports: [WaterQualityReportModuleBase],
  controllers: [WaterQualityReportController],
  providers: [WaterQualityReportService, WaterQualityReportResolver],
  exports: [WaterQualityReportService],
})
export class WaterQualityReportModule {}
