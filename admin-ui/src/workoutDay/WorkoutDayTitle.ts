import { WorkoutDay as TWorkoutDay } from "../api/workoutDay/WorkoutDay";

export const WORKOUTDAY_TITLE_FIELD = "day";

export const WorkoutDayTitle = (record: TWorkoutDay): string => {
  return record.day || record.id;
};
