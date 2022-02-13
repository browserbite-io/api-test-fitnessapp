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

import { NUTRITIONPLAN_TITLE_FIELD } from "../nutritionPlan/NutritionPlanTitle";
import { WORKOUTPLAN_TITLE_FIELD } from "./WorkoutPlanTitle";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const WorkoutPlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="goal" source="goal.id" reference="Goal">
          <TextField source={GOAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <ReferenceField
          label="location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="video" source="video" />
        <ReferenceManyField reference="Tip" target="WorkoutPlanId" label="tips">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="nutritionPlan"
              source="nutritionplan.id"
              reference="NutritionPlan"
            >
              <TextField source={NUTRITIONPLAN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="video" source="video" />
            <ReferenceField
              label="workoutPlan"
              source="workoutplan.id"
              reference="WorkoutPlan"
            >
              <TextField source={WORKOUTPLAN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkoutDay"
          target="WorkoutPlanId"
          label="workoutDays"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
