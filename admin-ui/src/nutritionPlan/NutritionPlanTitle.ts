import { NutritionPlan as TNutritionPlan } from "../api/nutritionPlan/NutritionPlan";

export const NUTRITIONPLAN_TITLE_FIELD = "name";

export const NutritionPlanTitle = (record: TNutritionPlan): string => {
  return record.name || record.id;
};
