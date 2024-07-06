import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterQualityReportServiceBase } from "./base/waterQualityReport.service.base";

@Injectable()
export class WaterQualityReportService extends WaterQualityReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
