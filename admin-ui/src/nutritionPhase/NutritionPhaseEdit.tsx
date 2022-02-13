import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const NutritionPhaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="fromDay" source="fromDay" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="tillDay" source="tillDay" />
      </SimpleForm>
    </Edit>
  );
};
