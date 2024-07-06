export type PumpStation = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
