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
import { LocationTitle } from "../location/LocationTitle";

export const WorkoutPlanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="goal.id" reference="Goal" label="goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <TextInput label="image" source="image" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="video" source="video" />
      </SimpleForm>
    </Create>
  );
};
