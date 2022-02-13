import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NutritionPlanResolverBase } from "./base/nutritionPlan.resolver.base";
import { NutritionPlan } from "./base/NutritionPlan";
import { NutritionPlanService } from "./nutritionPlan.service";

@graphql.Resolver(() => NutritionPlan)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NutritionPlanResolver extends NutritionPlanResolverBase {
  constructor(
    protected readonly service: NutritionPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
