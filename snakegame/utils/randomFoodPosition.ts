import { Coordinate } from "@/constants/Types";

export const randomFoodPosition = (maxX: number, maxY: number): Coordinate => {
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  };
};