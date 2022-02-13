import { WorkoutDay } from "../workoutDay/WorkoutDay";

export type Exercise = {
  additionalInformation: string | null;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  exerciseType?: "TIME" | "SET" | null;
  id: string;
  image: string | null;
  name: string | null;
  repetitions: number | null;
  sets: number | null;
  updatedAt: Date;
  video: string | null;
  workoutDay?: WorkoutDay | null;
};
