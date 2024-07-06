import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReservoirTitle } from "../reservoir/ReservoirTitle";

export const WaterQualityReportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
