export type RecipeUpdateInput = {
  description?: string | null;
  image?: string | null;
  meal?: "Breakfast" | "Lunch" | "Dinner" | null;
  name?: string | null;
  video?: string | null;
};
