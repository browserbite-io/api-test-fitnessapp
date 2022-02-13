import { TipWhereUniqueInput } from "./TipWhereUniqueInput";
import { TipUpdateInput } from "./TipUpdateInput";

export type UpdateTipArgs = {
  where: TipWhereUniqueInput;
  data: TipUpdateInput;
};
