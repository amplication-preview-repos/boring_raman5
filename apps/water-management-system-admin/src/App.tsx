import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReservoirList } from "./reservoir/ReservoirList";
import { ReservoirCreate } from "./reservoir/ReservoirCreate";
import { ReservoirEdit } from "./reservoir/ReservoirEdit";
import { ReservoirShow } from "./reservoir/ReservoirShow";
import { PumpStationList } from "./pumpStation/PumpStationList";
import { PumpStationCreate } from "./pumpStation/PumpStationCreate";
import { PumpStationEdit } from "./pumpStation/PumpStationEdit";
import { PumpStationShow } from "./pumpStation/PumpStationShow";
import { WaterQualityReportList } from "./waterQualityReport/WaterQualityReportList";
import { WaterQualityReportCreate } from "./waterQualityReport/WaterQualityReportCreate";
import { WaterQualityReportEdit } from "./waterQualityReport/WaterQualityReportEdit";
import { WaterQualityReportShow } from "./waterQualityReport/WaterQualityReportShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { UsageRecordList } from "./usageRecord/UsageRecordList";
import { UsageRecordCreate } from "./usageRecord/UsageRecordCreate";
import { UsageRecordEdit } from "./usageRecord/UsageRecordEdit";
import { UsageRecordShow } from "./usageRecord/UsageRecordShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WaterManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Reservoir"
          list={ReservoirList}
          edit={ReservoirEdit}
          create={ReservoirCreate}
          show={ReservoirShow}
        />
        <Resource
          name="PumpStation"
          list={PumpStationList}
          edit={PumpStationEdit}
          create={PumpStationCreate}
          show={PumpStationShow}
        />
        <Resource
          name="WaterQualityReport"
          list={WaterQualityReportList}
          edit={WaterQualityReportEdit}
          create={WaterQualityReportCreate}
          show={WaterQualityReportShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="UsageRecord"
          list={UsageRecordList}
          edit={UsageRecordEdit}
          create={UsageRecordCreate}
          show={UsageRecordShow}
        />
      </Admin>
    </div>
  );
};

export default App;
