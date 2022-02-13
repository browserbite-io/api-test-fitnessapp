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
import { ApiProperty } from "@nestjs/swagger";
import { NutritionPlanWhereInput } from "./NutritionPlanWhereInput";
import { Type } from "class-transformer";
import { NutritionPlanOrderByInput } from "./NutritionPlanOrderByInput";

@ArgsType()
class NutritionPlanFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NutritionPlanWhereInput,
  })
  @Field(() => NutritionPlanWhereInput, { nullable: true })
  @Type(() => NutritionPlanWhereInput)
  where?: NutritionPlanWhereInput;

  @ApiProperty({
    required: false,
    type: NutritionPlanOrderByInput,
  })
  @Field(() => NutritionPlanOrderByInput, { nullable: true })
  @Type(() => NutritionPlanOrderByInput)
  orderBy?: NutritionPlanOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NutritionPlanFindManyArgs };
