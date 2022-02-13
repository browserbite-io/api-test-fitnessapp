import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
  PasswordInput,
  SelectArrayInput,
  DateInput,
} from "react-admin";

import { GoalTitle } from "../goal/GoalTitle";
import { LocationTitle } from "../location/LocationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="armSize" source="armSize" />
        <SelectInput
          source="bodytype"
          label="bodytype"
          choices={[
            { label: "ectomorph", value: "ectomorph" },
            { label: "mesomorph", value: "mesomorph" },
            { label: "endomorph", value: "endomorph" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="chestSize" source="chestSize" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "male" },
            { label: "Female", value: "Female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="goal.id" reference="Goal" label="goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <NumberInput label="hipSize" source="hipSize" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput label="legSize" source="legSize" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <DateInput label="startDate" source="startDate" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
