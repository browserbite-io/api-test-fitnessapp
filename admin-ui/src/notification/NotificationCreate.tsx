import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { GoalTitle } from "../goal/GoalTitle";
import { LocationTitle } from "../location/LocationTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="day" source="day" />
        <SelectInput
          source="destination"
          label="destination"
          choices={[
            { label: "NUTRITIONPLAN", value: "NUTRITIONPLAN" },
            { label: "WORKOUTPLAN", value: "WORKOUTPLAN" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="goal.id" reference="Goal" label="goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
