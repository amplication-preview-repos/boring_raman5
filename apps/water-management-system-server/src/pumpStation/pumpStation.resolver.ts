import * as graphql from "@nestjs/graphql";
import { PumpStationResolverBase } from "./base/pumpStation.resolver.base";
import { PumpStation } from "./base/PumpStation";
import { PumpStationService } from "./pumpStation.service";

@graphql.Resolver(() => PumpStation)
export class PumpStationResolver extends PumpStationResolverBase {
  constructor(protected readonly service: PumpStationService) {
    super(service);
  }
}
