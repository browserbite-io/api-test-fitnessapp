/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { NutritionPhaseWhereUniqueInput } from "./NutritionPhaseWhereUniqueInput";
import { NutritionPhaseUpdateInput } from "./NutritionPhaseUpdateInput";

@ArgsType()
class UpdateNutritionPhaseArgs {
  @Field(() => NutritionPhaseWhereUniqueInput, { nullable: false })
  where!: NutritionPhaseWhereUniqueInput;
  @Field(() => NutritionPhaseUpdateInput, { nullable: false })
  data!: NutritionPhaseUpdateInput;
}

export { UpdateNutritionPhaseArgs };
