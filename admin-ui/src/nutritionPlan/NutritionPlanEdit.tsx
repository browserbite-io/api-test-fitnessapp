import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GoalTitle } from "../goal/GoalTitle";

export const NutritionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="goal.id" reference="Goal" label="goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
        <TextInput label="shoppingList" multiline source="shoppingList" />
        <TextInput label="video" source="video" />
      </SimpleForm>
    </Edit>
  );
};
