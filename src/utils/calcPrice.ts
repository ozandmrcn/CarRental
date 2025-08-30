import type { ICar } from "../types";

/**
 * Calculates a representative daily rental price in USD for a car
 */
export const calculatePrice = (car: ICar): number => {
  let basePrice = 30; // Minimum daily price

  // Engine displacement effect (larger engines slightly more expensive)
  basePrice += (car.displ || 0) * 5;

  // Cylinders effect
  basePrice += (car.cylinders || 0) * 2;

  // Age adjustment: older cars are cheaper
  const age = car.year ? new Date().getFullYear() - parseInt(car.year) : 0;
  if (age < 3) basePrice *= 1.2; // very new cars +20%
  else if (age < 7) basePrice *= 1.1; // moderately new cars +10%
  else if (age > 15) basePrice *= 0.8; // very old cars -20%

  // Fuel type adjustment (premium fuel cars slightly more expensive)
  if (car.fueltype && car.fueltype.toLowerCase().includes("premium"))
    basePrice *= 1.1;
  else if (car.fueltype && car.fueltype.toLowerCase().includes("diesel"))
    basePrice *= 1.05;

  // Vehicle class adjustment (luxury or popular classes +15%)
  const premiumClasses = ["Luxury Cars", "Sports Cars", "Minicompact Cars"];
  if (car.vclass && premiumClasses.includes(car.vclass)) basePrice *= 1.15;

  // Drive type adjustment (4WD/All-Wheel +10%)
  if (
    car.drive &&
    (car.drive.toLowerCase().includes("all") ||
      car.drive.toLowerCase().includes("4wd"))
  ) {
    basePrice *= 1.1;
  }

  return Math.round(basePrice);
};
