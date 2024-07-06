import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESERVOIR_TITLE_FIELD } from "../reservoir/ReservoirTitle";

export const WaterQualityReportShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
