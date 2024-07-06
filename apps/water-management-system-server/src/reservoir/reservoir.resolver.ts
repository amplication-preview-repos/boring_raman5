import * as graphql from "@nestjs/graphql";
import { ReservoirResolverBase } from "./base/reservoir.resolver.base";
import { Reservoir } from "./base/Reservoir";
import { ReservoirService } from "./reservoir.service";

@graphql.Resolver(() => Reservoir)
export class ReservoirResolver extends ReservoirResolverBase {
  constructor(protected readonly service: ReservoirService) {
    super(service);
  }
}
