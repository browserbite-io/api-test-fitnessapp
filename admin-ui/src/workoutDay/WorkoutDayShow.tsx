import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORKOUTDAY_TITLE_FIELD } from "./WorkoutDayTitle";
import { WORKOUTPLAN_TITLE_FIELD } from "../workoutPlan/WorkoutPlanTitle";

export const WorkoutDayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="day" source="day" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="workoutPlan"
          source="workoutplan.id"
          reference="WorkoutPlan"
        >
          <TextField source={WORKOUTPLAN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Exercise"
          target="WorkoutDayId"
          label="exercises"
        >
          <Datagrid rowClick="show">
            <TextField
              label="additionalInformation"
              source="additionalInformation"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="duration" source="duration" />
            <TextField label="exerciseType" source="exerciseType" />
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <TextField label="name" source="name" />
            <TextField label="repetitions" source="repetitions" />
            <TextField label="sets" source="sets" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="video" source="video" />
            <ReferenceField
              label="workoutDay"
              source="workoutday.id"
              reference="WorkoutDay"
            >
              <TextField source={WORKOUTDAY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
