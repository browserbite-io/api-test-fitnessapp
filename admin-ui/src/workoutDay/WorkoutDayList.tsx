import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKOUTPLAN_TITLE_FIELD } from "../workoutPlan/WorkoutPlanTitle";

export const WorkoutDayList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"workoutDays"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
