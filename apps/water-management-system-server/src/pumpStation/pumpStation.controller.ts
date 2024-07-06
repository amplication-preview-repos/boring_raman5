import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PumpStationService } from "./pumpStation.service";
import { PumpStationControllerBase } from "./base/pumpStation.controller.base";

@swagger.ApiTags("pumpStations")
@common.Controller("pumpStations")
export class PumpStationController extends PumpStationControllerBase {
  constructor(protected readonly service: PumpStationService) {
    super(service);
  }
}
