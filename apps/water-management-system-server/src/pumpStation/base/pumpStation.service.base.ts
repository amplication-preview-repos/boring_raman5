/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PumpStation as PrismaPumpStation } from "@prisma/client";

export class PumpStationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PumpStationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pumpStation.count(args);
  }

  async pumpStations(
    args: Prisma.PumpStationFindManyArgs
  ): Promise<PrismaPumpStation[]> {
    return this.prisma.pumpStation.findMany(args);
  }
  async pumpStation(
    args: Prisma.PumpStationFindUniqueArgs
  ): Promise<PrismaPumpStation | null> {
    return this.prisma.pumpStation.findUnique(args);
  }
  async createPumpStation(
    args: Prisma.PumpStationCreateArgs
  ): Promise<PrismaPumpStation> {
    return this.prisma.pumpStation.create(args);
  }
  async updatePumpStation(
    args: Prisma.PumpStationUpdateArgs
  ): Promise<PrismaPumpStation> {
    return this.prisma.pumpStation.update(args);
  }
  async deletePumpStation(
    args: Prisma.PumpStationDeleteArgs
  ): Promise<PrismaPumpStation> {
    return this.prisma.pumpStation.delete(args);
  }
}
