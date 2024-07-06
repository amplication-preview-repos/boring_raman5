import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESERVOIR_TITLE_FIELD } from "../reservoir/ReservoirTitle";

export const WaterQualityReportList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WaterQualityReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
