import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkoutPlanTitle } from "../workoutPlan/WorkoutPlanTitle";

export const WorkoutDayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="day" source="day" />
        <TextInput label="description" multiline source="description" />
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
