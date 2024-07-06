import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESERVOIR_TITLE_FIELD } from "./ReservoirTitle";

export const ReservoirShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="waterLevel" source="waterLevel" />
        <ReferenceManyField
          reference="WaterQualityReport"
          target="reservoirId"
          label="WaterQualityReports"
        >
          <Datagrid rowClick="show">
            <TextField label="contaminants" source="contaminants" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="phLevel" source="phLevel" />
            <TextField label="reportDate" source="reportDate" />
            <ReferenceField
              label="Reservoir"
              source="reservoir.id"
              reference="Reservoir"
            >
              <TextField source={RESERVOIR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
