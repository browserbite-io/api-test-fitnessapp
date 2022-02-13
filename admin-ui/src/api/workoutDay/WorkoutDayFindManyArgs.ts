import { WorkoutDayWhereInput } from "./WorkoutDayWhereInput";
import { WorkoutDayOrderByInput } from "./WorkoutDayOrderByInput";

export type WorkoutDayFindManyArgs = {
  where?: WorkoutDayWhereInput;
  orderBy?: WorkoutDayOrderByInput;
  skip?: number;
  take?: number;
};
