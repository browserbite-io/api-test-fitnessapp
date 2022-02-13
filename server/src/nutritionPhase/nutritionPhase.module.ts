import { Module } from "@nestjs/common";
import { NutritionPhaseModuleBase } from "./base/nutritionPhase.module.base";
import { NutritionPhaseService } from "./nutritionPhase.service";
import { NutritionPhaseController } from "./nutritionPhase.controller";
import { NutritionPhaseResolver } from "./nutritionPhase.resolver";

@Module({
  imports: [NutritionPhaseModuleBase],
  controllers: [NutritionPhaseController],
  providers: [NutritionPhaseService, NutritionPhaseResolver],
  exports: [NutritionPhaseService],
})
export class NutritionPhaseModule {}
