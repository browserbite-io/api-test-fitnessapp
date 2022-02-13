import { Module } from "@nestjs/common";
import { TipModuleBase } from "./base/tip.module.base";
import { TipService } from "./tip.service";
import { TipController } from "./tip.controller";
import { TipResolver } from "./tip.resolver";

@Module({
  imports: [TipModuleBase],
  controllers: [TipController],
  providers: [TipService, TipResolver],
  exports: [TipService],
})
export class TipModule {}
