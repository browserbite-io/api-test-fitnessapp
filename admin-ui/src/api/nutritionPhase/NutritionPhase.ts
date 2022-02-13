import { Recipe } from "../recipe/Recipe";

export type NutritionPhase = {
  createdAt: Date;
  description: string | null;
  fromDay: number | null;
  id: string;
  name: string | null;
  recipes?: Array<Recipe>;
  tillDay: number | null;
  updatedAt: Date;
};
