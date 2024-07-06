import { Module } from "@nestjs/common";
import { PumpStationModuleBase } from "./base/pumpStation.module.base";
import { PumpStationService } from "./pumpStation.service";
import { PumpStationController } from "./pumpStation.controller";
import { PumpStationResolver } from "./pumpStation.resolver";

@Module({
  imports: [PumpStationModuleBase],
  controllers: [PumpStationController],
  providers: [PumpStationService, PumpStationResolver],
  exports: [PumpStationService],
})
export class PumpStationModule {}
