import { Tip as TTip } from "../api/tip/Tip";

export const TIP_TITLE_FIELD = "name";

export const TipTitle = (record: TTip): string => {
  return record.name || record.id;
};
