import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GOAL_TITLE_FIELD } from "./GoalTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const GoalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="GoalId"
          label="notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="day" source="day" />
            <TextField label="destination" source="destination" />
            <ReferenceField label="goal" source="goal.id" reference="Goal">
              <TextField source={GOAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="NutritionPlan"
          target="GoalId"
          label="nutritionPlans"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField label="goal" source="goal.id" reference="Goal">
              <TextField source={GOAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <TextField label="name" source="name" />
            <TextField label="shoppingList" source="shoppingList" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="video" source="video" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="GoalId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="armSize" source="armSize" />
            <TextField label="bodytype" source="bodytype" />
            <TextField label="chestSize" source="chestSize" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Gender" source="gender" />
            <ReferenceField label="goal" source="goal.id" reference="Goal">
              <TextField source={GOAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="hipSize" source="hipSize" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="legSize" source="legSize" />
            <ReferenceField
              label="location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkoutPlan"
          target="GoalId"
          label="workoutPlans"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
