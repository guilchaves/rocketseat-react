export const APPOINTMENTS_KEY = "appointments";

export enum Daytime {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  EVENING = "evening",
}
export type Appointment = {
  id: string;
  date: string;
  time: string;
  daytime: Daytime;
  clientName: string;
};
