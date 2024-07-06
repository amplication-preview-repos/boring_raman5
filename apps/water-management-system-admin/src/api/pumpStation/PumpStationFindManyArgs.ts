import { PumpStationWhereInput } from "./PumpStationWhereInput";
import { PumpStationOrderByInput } from "./PumpStationOrderByInput";

export type PumpStationFindManyArgs = {
  where?: PumpStationWhereInput;
  orderBy?: Array<PumpStationOrderByInput>;
  skip?: number;
  take?: number;
};
