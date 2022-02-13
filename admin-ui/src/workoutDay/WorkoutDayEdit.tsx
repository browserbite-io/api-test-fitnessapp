import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkoutPlanTitle } from "../workoutPlan/WorkoutPlanTitle";

export const WorkoutDayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
