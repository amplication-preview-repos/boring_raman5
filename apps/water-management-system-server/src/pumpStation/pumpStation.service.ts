import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PumpStationServiceBase } from "./base/pumpStation.service.base";

@Injectable()
export class PumpStationService extends PumpStationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
