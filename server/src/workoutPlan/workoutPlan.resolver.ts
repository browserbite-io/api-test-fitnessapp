import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WorkoutPlanResolverBase } from "./base/workoutPlan.resolver.base";
import { WorkoutPlan } from "./base/WorkoutPlan";
import { WorkoutPlanService } from "./workoutPlan.service";

@graphql.Resolver(() => WorkoutPlan)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WorkoutPlanResolver extends WorkoutPlanResolverBase {
  constructor(
    protected readonly service: WorkoutPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
