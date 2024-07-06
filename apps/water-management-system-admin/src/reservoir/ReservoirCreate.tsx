import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WaterQualityReportTitle } from "../waterQualityReport/WaterQualityReportTitle";

export const ReservoirCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="waterLevel" source="waterLevel" />
        <ReferenceArrayInput
          source="waterQualityReports"
          reference="WaterQualityReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WaterQualityReportTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
