import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { WORKOUTDAY_TITLE_FIELD } from "../workoutDay/WorkoutDayTitle";

export const ExerciseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
