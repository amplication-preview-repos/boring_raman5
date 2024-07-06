import * as graphql from "@nestjs/graphql";
import { WaterQualityReportResolverBase } from "./base/waterQualityReport.resolver.base";
import { WaterQualityReport } from "./base/WaterQualityReport";
import { WaterQualityReportService } from "./waterQualityReport.service";

@graphql.Resolver(() => WaterQualityReport)
export class WaterQualityReportResolver extends WaterQualityReportResolverBase {
  constructor(protected readonly service: WaterQualityReportService) {
    super(service);
  }
}
