import { Module } from "@nestjs/common";
import { NutritionPlanModuleBase } from "./base/nutritionPlan.module.base";
import { NutritionPlanService } from "./nutritionPlan.service";
import { NutritionPlanController } from "./nutritionPlan.controller";
import { NutritionPlanResolver } from "./nutritionPlan.resolver";

@Module({
  imports: [NutritionPlanModuleBase],
  controllers: [NutritionPlanController],
  providers: [NutritionPlanService, NutritionPlanResolver],
  exports: [NutritionPlanService],
})
export class NutritionPlanModule {}
