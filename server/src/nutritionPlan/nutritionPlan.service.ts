import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NutritionPlanServiceBase } from "./base/nutritionPlan.service.base";

@Injectable()
export class NutritionPlanService extends NutritionPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
