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
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsInt,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumNotificationDestination } from "./EnumNotificationDestination";
import { Goal } from "../../goal/base/Goal";
import { Location } from "../../location/base/Location";
@ObjectType()
class Notification {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  day!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumNotificationDestination,
  })
  @IsEnum(EnumNotificationDestination)
  @IsOptional()
  @Field(() => EnumNotificationDestination, {
    nullable: true,
  })
  destination?: "NUTRITIONPLAN" | "WORKOUTPLAN" | null;

  @ApiProperty({
    required: false,
    type: () => Goal,
  })
  @ValidateNested()
  @Type(() => Goal)
  @IsOptional()
  goal?: Goal | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Location,
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Location | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Notification };
