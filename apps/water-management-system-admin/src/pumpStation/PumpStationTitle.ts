import { PumpStation as TPumpStation } from "../api/pumpStation/PumpStation";

export const PUMPSTATION_TITLE_FIELD = "name";

export const PumpStationTitle = (record: TPumpStation): string => {
  return record.name?.toString() || String(record.id);
};
