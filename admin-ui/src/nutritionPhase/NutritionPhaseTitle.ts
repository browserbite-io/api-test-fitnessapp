import { NutritionPhase as TNutritionPhase } from "../api/nutritionPhase/NutritionPhase";

export const NUTRITIONPHASE_TITLE_FIELD = "name";

export const NutritionPhaseTitle = (record: TNutritionPhase): string => {
  return record.name || record.id;
};
