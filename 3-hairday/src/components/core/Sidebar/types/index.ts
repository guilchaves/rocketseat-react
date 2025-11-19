export interface TimeSlot {
  time: string;
  disabled?: boolean;
}

export interface TimeSlots {
  morning: TimeSlot[];
  afternoon: TimeSlot[];
  evening: TimeSlot[];
}
