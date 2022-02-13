import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GoalTitle } from "../goal/GoalTitle";

export const NutritionPlanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
