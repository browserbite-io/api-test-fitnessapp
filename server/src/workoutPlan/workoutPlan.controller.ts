import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkoutPlanService } from "./workoutPlan.service";
import { WorkoutPlanControllerBase } from "./base/workoutPlan.controller.base";

@swagger.ApiTags("workout-plans")
@common.Controller("workout-plans")
export class WorkoutPlanController extends WorkoutPlanControllerBase {
  constructor(
    protected readonly service: WorkoutPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
