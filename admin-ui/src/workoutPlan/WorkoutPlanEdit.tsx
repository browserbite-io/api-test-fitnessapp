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
import { LocationTitle } from "../location/LocationTitle";

export const WorkoutPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
