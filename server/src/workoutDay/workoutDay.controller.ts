import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkoutDayService } from "./workoutDay.service";
import { WorkoutDayControllerBase } from "./base/workoutDay.controller.base";

@swagger.ApiTags("workout-days")
@common.Controller("workout-days")
export class WorkoutDayController extends WorkoutDayControllerBase {
  constructor(
    protected readonly service: WorkoutDayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
