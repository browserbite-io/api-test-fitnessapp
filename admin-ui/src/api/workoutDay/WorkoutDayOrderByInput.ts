import { SortOrder } from "../../util/SortOrder";

export type WorkoutDayOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  workoutPlanId?: SortOrder;
};
