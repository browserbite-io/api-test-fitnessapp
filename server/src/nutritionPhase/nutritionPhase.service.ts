import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NutritionPhaseServiceBase } from "./base/nutritionPhase.service.base";

@Injectable()
export class NutritionPhaseService extends NutritionPhaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
