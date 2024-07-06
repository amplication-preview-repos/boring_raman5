import { ReservoirWhereInput } from "./ReservoirWhereInput";
import { ReservoirOrderByInput } from "./ReservoirOrderByInput";

export type ReservoirFindManyArgs = {
  where?: ReservoirWhereInput;
  orderBy?: Array<ReservoirOrderByInput>;
  skip?: number;
  take?: number;
};
