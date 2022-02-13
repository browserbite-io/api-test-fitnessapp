import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ExerciseResolverBase } from "./base/exercise.resolver.base";
import { Exercise } from "./base/Exercise";
import { ExerciseService } from "./exercise.service";

@graphql.Resolver(() => Exercise)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExerciseResolver extends ExerciseResolverBase {
  constructor(
    protected readonly service: ExerciseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
