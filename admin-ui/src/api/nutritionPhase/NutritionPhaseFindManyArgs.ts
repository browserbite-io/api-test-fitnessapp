import { NutritionPhaseWhereInput } from "./NutritionPhaseWhereInput";
import { NutritionPhaseOrderByInput } from "./NutritionPhaseOrderByInput";

export type NutritionPhaseFindManyArgs = {
  where?: NutritionPhaseWhereInput;
  orderBy?: NutritionPhaseOrderByInput;
  skip?: number;
  take?: number;
};
