import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkoutDayWhereUniqueInput } from "../workoutDay/WorkoutDayWhereUniqueInput";

export type ExerciseWhereInput = {
  additionalInformation?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  exerciseType?: "TIME" | "SET";
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  repetitions?: IntNullableFilter;
  sets?: IntNullableFilter;
  video?: StringNullableFilter;
  workoutDay?: WorkoutDayWhereUniqueInput;
};
