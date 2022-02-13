import { ExerciseWhereInput } from "./ExerciseWhereInput";
import { ExerciseOrderByInput } from "./ExerciseOrderByInput";

export type ExerciseFindManyArgs = {
  where?: ExerciseWhereInput;
  orderBy?: ExerciseOrderByInput;
  skip?: number;
  take?: number;
};
