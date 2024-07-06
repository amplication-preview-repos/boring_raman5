import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReservoirTitle } from "../reservoir/ReservoirTitle";

export const WaterQualityReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contaminants" multiline source="contaminants" />
        <NumberInput label="phLevel" source="phLevel" />
        <DateTimeInput label="reportDate" source="reportDate" />
        <ReferenceInput
          source="reservoir.id"
          reference="Reservoir"
          label="Reservoir"
        >
          <SelectInput optionText={ReservoirTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
