import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKOUTDAY_TITLE_FIELD } from "../workoutDay/WorkoutDayTitle";

export const ExerciseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"exercises"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
