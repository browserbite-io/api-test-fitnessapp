import { Notification } from "../notification/Notification";
import { User } from "../user/User";
import { WorkoutPlan } from "../workoutPlan/WorkoutPlan";

export type Location = {
  createdAt: Date;
  id: string;
  name: string;
  notifications?: Array<Notification>;
  updatedAt: Date;
  users?: Array<User>;
  workoutPlans?: Array<WorkoutPlan>;
};
