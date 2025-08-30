import type { ICar } from "../types";

type FilteredCar = {
  make?: string;
  model?: string;
  cylinders?: number;
  drive?: string;
  fueltype?: string;
  trany?: string;
  vclass?: string;
  year?: string;
  tcharger?: "T" | null;
  startstop?: "Y" | "N" | null;
  co2?: number;
  displ?: number;
  atvtype?: string | null;
};

const accepted: (keyof ICar)[] = [
  "make",
  "model",
  "cylinders",
  "drive",
  "fueltype",
  "trany",
  "vclass",
  "year",
  "tcharger",
  "startstop",
  "co2",
  "displ",
  "atvtype",
];

const formatData = (car: ICar): FilteredCar => {
  const filteredCar: FilteredCar = {};

  accepted.forEach((key) => {
    filteredCar[key as keyof FilteredCar] = car[key] ?? (null as any);
  });

  return filteredCar;
};

export default formatData;
