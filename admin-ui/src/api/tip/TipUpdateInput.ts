import { NutritionPlanWhereUniqueInput } from "../nutritionPlan/NutritionPlanWhereUniqueInput";
import { WorkoutPlanWhereUniqueInput } from "../workoutPlan/WorkoutPlanWhereUniqueInput";

export type TipUpdateInput = {
  description?: string | null;
  image?: string | null;
  name?: string | null;
  nutritionPlan?: NutritionPlanWhereUniqueInput | null;
  video?: string | null;
  workoutPlan?: WorkoutPlanWhereUniqueInput | null;
};
