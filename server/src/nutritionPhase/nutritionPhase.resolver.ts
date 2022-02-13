import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NutritionPhaseResolverBase } from "./base/nutritionPhase.resolver.base";
import { NutritionPhase } from "./base/NutritionPhase";
import { NutritionPhaseService } from "./nutritionPhase.service";

@graphql.Resolver(() => NutritionPhase)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NutritionPhaseResolver extends NutritionPhaseResolverBase {
  constructor(
    protected readonly service: NutritionPhaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
