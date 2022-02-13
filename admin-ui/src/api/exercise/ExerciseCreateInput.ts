import { WorkoutDayWhereUniqueInput } from "../workoutDay/WorkoutDayWhereUniqueInput";

export type ExerciseCreateInput = {
  additionalInformation?: string | null;
  description?: string | null;
  duration?: number | null;
  exerciseType?: "TIME" | "SET" | null;
  image?: string | null;
  name?: string | null;
  repetitions?: number | null;
  sets?: number | null;
  video?: string | null;
  workoutDay?: WorkoutDayWhereUniqueInput | null;
};
