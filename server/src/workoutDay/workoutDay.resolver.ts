import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WorkoutDayResolverBase } from "./base/workoutDay.resolver.base";
import { WorkoutDay } from "./base/WorkoutDay";
import { WorkoutDayService } from "./workoutDay.service";

@graphql.Resolver(() => WorkoutDay)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WorkoutDayResolver extends WorkoutDayResolverBase {
  constructor(
    protected readonly service: WorkoutDayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
