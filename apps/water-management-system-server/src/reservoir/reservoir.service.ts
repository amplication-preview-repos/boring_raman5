import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReservoirServiceBase } from "./base/reservoir.service.base";

@Injectable()
export class ReservoirService extends ReservoirServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
