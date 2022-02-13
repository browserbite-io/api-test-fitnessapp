import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  additionalInformation?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  exerciseType?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  repetitions?: SortOrder;
  sets?: SortOrder;
  updatedAt?: SortOrder;
  video?: SortOrder;
  workoutDayId?: SortOrder;
};
