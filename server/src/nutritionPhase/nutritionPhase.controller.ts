import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NutritionPhaseService } from "./nutritionPhase.service";
import { NutritionPhaseControllerBase } from "./base/nutritionPhase.controller.base";

@swagger.ApiTags("nutrition-phases")
@common.Controller("nutrition-phases")
export class NutritionPhaseController extends NutritionPhaseControllerBase {
  constructor(
    protected readonly service: NutritionPhaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
