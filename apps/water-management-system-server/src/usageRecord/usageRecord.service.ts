import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsageRecordServiceBase } from "./base/usageRecord.service.base";

@Injectable()
export class UsageRecordService extends UsageRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
