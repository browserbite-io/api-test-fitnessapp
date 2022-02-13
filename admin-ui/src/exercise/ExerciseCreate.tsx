import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { WorkoutDayTitle } from "../workoutDay/WorkoutDayTitle";

export const ExerciseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="additionalInformation"
          multiline
          source="additionalInformation"
        />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="duration" source="duration" />
        <SelectInput
          source="exerciseType"
          label="exerciseType"
          choices={[
            { label: "TIME", value: "TIME" },
            { label: "SET", value: "SET" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="image" source="image" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="repetitions" source="repetitions" />
        <NumberInput step={1} label="sets" source="sets" />
        <TextInput label="video" source="video" />
        <ReferenceInput
          source="workoutday.id"
          reference="WorkoutDay"
          label="workoutDay"
        >
          <SelectInput optionText={WorkoutDayTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
