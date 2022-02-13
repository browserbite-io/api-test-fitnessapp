import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const RecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
