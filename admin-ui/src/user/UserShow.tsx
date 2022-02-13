import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
