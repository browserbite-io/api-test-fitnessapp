import { Notification } from "../notification/Notification";
import { NutritionPlan } from "../nutritionPlan/NutritionPlan";
import { User } from "../user/User";
import { WorkoutPlan } from "../workoutPlan/WorkoutPlan";

export type Goal = {
  createdAt: Date;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  nutritionPlans?: Array<NutritionPlan>;
  updatedAt: Date;
  users?: Array<User>;
  workoutPlans?: Array<WorkoutPlan>;
};
