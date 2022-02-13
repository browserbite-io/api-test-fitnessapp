import { NutritionPhase } from "../nutritionPhase/NutritionPhase";

export type Recipe = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  meal?: "Breakfast" | "Lunch" | "Dinner" | null;
  name: string | null;
  nutritionPhases?: Array<NutritionPhase>;
  updatedAt: Date;
  video: string | null;
};
