import { Goal } from "../goal/Goal";
import { Tip } from "../tip/Tip";

export type NutritionPlan = {
  createdAt: Date;
  description: string | null;
  goal?: Goal | null;
  id: string;
  image: string | null;
  name: string | null;
  shoppingList: string | null;
  tips?: Array<Tip>;
  updatedAt: Date;
  video: string | null;
};
