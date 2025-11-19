import { Daytime } from "../models/appointment";

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getDaytime = (time: string): Daytime => {
  const hour = parseInt(time.split(":")[0]);

  if (hour >= 9 && hour < 13) return Daytime.MORNING;
  if (hour >= 13 && hour < 19) return Daytime.AFTERNOON;
  return Daytime.EVENING;
};

export const getTodayISO = (): string => new Date().toISOString().split("T")[0];
