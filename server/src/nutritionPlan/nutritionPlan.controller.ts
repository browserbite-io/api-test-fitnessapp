import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NutritionPlanService } from "./nutritionPlan.service";
import { NutritionPlanControllerBase } from "./base/nutritionPlan.controller.base";

@swagger.ApiTags("nutrition-plans")
@common.Controller("nutrition-plans")
export class NutritionPlanController extends NutritionPlanControllerBase {
  constructor(
    protected readonly service: NutritionPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
