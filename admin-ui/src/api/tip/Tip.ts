import { NutritionPlan } from "../nutritionPlan/NutritionPlan";
import { WorkoutPlan } from "../workoutPlan/WorkoutPlan";

export type Tip = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  name: string | null;
  nutritionPlan?: NutritionPlan | null;
  updatedAt: Date;
  video: string | null;
  workoutPlan?: WorkoutPlan | null;
};
