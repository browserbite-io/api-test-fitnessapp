import { TipWhereInput } from "./TipWhereInput";
import { TipOrderByInput } from "./TipOrderByInput";

export type TipFindManyArgs = {
  where?: TipWhereInput;
  orderBy?: TipOrderByInput;
  skip?: number;
  take?: number;
};
