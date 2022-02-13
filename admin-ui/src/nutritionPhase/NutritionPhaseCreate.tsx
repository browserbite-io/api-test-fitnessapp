import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const NutritionPhaseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="fromDay" source="fromDay" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="tillDay" source="tillDay" />
      </SimpleForm>
    </Create>
  );
};
