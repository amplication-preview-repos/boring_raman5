import { Module } from "@nestjs/common";
import { ReservoirModuleBase } from "./base/reservoir.module.base";
import { ReservoirService } from "./reservoir.service";
import { ReservoirController } from "./reservoir.controller";
import { ReservoirResolver } from "./reservoir.resolver";

@Module({
  imports: [ReservoirModuleBase],
  controllers: [ReservoirController],
  providers: [ReservoirService, ReservoirResolver],
  exports: [ReservoirService],
})
export class ReservoirModule {}
