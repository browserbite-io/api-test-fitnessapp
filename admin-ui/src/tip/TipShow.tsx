import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { NUTRITIONPLAN_TITLE_FIELD } from "../nutritionPlan/NutritionPlanTitle";
import { WORKOUTPLAN_TITLE_FIELD } from "../workoutPlan/WorkoutPlanTitle";

export const TipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
