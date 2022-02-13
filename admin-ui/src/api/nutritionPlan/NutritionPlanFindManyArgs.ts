import { NutritionPlanWhereInput } from "./NutritionPlanWhereInput";
import { NutritionPlanOrderByInput } from "./NutritionPlanOrderByInput";

export type NutritionPlanFindManyArgs = {
  where?: NutritionPlanWhereInput;
  orderBy?: NutritionPlanOrderByInput;
  skip?: number;
  take?: number;
};
