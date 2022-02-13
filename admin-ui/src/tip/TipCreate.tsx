import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NutritionPlanTitle } from "../nutritionPlan/NutritionPlanTitle";
import { WorkoutPlanTitle } from "../workoutPlan/WorkoutPlanTitle";

export const TipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="nutritionplan.id"
          reference="NutritionPlan"
          label="nutritionPlan"
        >
          <SelectInput optionText={NutritionPlanTitle} />
        </ReferenceInput>
        <TextInput label="video" source="video" />
        <ReferenceInput
          source="workoutplan.id"
          reference="WorkoutPlan"
          label="workoutPlan"
        >
          <SelectInput optionText={WorkoutPlanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
