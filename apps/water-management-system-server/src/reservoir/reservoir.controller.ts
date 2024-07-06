import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReservoirService } from "./reservoir.service";
import { ReservoirControllerBase } from "./base/reservoir.controller.base";

@swagger.ApiTags("reservoirs")
@common.Controller("reservoirs")
export class ReservoirController extends ReservoirControllerBase {
  constructor(protected readonly service: ReservoirService) {
    super(service);
  }
}
