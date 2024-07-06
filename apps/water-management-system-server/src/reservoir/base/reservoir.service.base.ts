/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Reservoir as PrismaReservoir,
  WaterQualityReport as PrismaWaterQualityReport,
} from "@prisma/client";

export class ReservoirServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReservoirCountArgs, "select">
  ): Promise<number> {
    return this.prisma.reservoir.count(args);
  }

  async reservoirs(
    args: Prisma.ReservoirFindManyArgs
  ): Promise<PrismaReservoir[]> {
    return this.prisma.reservoir.findMany(args);
  }
  async reservoir(
    args: Prisma.ReservoirFindUniqueArgs
  ): Promise<PrismaReservoir | null> {
    return this.prisma.reservoir.findUnique(args);
  }
  async createReservoir(
    args: Prisma.ReservoirCreateArgs
  ): Promise<PrismaReservoir> {
    return this.prisma.reservoir.create(args);
  }
  async updateReservoir(
    args: Prisma.ReservoirUpdateArgs
  ): Promise<PrismaReservoir> {
    return this.prisma.reservoir.update(args);
  }
  async deleteReservoir(
    args: Prisma.ReservoirDeleteArgs
  ): Promise<PrismaReservoir> {
    return this.prisma.reservoir.delete(args);
  }

  async findWaterQualityReports(
    parentId: string,
    args: Prisma.WaterQualityReportFindManyArgs
  ): Promise<PrismaWaterQualityReport[]> {
    return this.prisma.reservoir
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .waterQualityReports(args);
  }
}