import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NutritionPhaseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"nutritionPhases"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="fromDay" source="fromDay" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="tillDay" source="tillDay" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
