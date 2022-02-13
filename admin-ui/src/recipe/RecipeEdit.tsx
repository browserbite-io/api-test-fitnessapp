import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const RecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <SelectInput
          source="meal"
          label="meal"
          choices={[
            { label: "Breakfast", value: "Breakfast" },
            { label: "Lunch", value: "Lunch" },
            { label: "Dinner", value: "Dinner" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <TextInput label="video" source="video" />
      </SimpleForm>
    </Edit>
  );
};
