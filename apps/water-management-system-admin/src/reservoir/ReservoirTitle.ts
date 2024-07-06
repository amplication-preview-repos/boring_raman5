import { Reservoir as TReservoir } from "../api/reservoir/Reservoir";

export const RESERVOIR_TITLE_FIELD = "name";

export const ReservoirTitle = (record: TReservoir): string => {
  return record.name?.toString() || String(record.id);
};
