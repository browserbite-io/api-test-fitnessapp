import { SortOrder } from "../../util/SortOrder";

export type WorkoutPlanOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
};
