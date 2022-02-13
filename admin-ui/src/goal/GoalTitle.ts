import { Goal as TGoal } from "../api/goal/Goal";

export const GOAL_TITLE_FIELD = "name";

export const GoalTitle = (record: TGoal): string => {
  return record.name || record.id;
};
