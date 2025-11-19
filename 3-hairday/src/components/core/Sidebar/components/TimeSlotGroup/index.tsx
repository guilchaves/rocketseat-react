import TimeSelect from "../../../../ui/TimeSelect";
import Typography from "../../../../ui/Typography";
import type { TimeSlot } from "../../types";

interface TimeSlotGroupProps {
  label: string;
  times: TimeSlot[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  bookedTimes?: string[];
}

export function TimeSlotGroup({
  label,
  times,
  selectedTime,
  onTimeSelect,
  bookedTimes,
}: TimeSlotGroupProps) {
  return (
    <>
      <Typography as="p" variant="title-sm" className="text-gray-300">
        {label}
      </Typography>
      <div className="flex gap-1 flex-wrap">
        {times.map(({ time, disabled }) => {
          const isBooked = bookedTimes?.includes(time);
          const isDisabled = disabled || isBooked;

          return (
            <TimeSelect
              key={time}
              time={time}
              disabled={isDisabled}
              isSelected={selectedTime === time}
              onClick={() => !disabled && onTimeSelect(time)}
            />
          );
        })}
      </div>
    </>
  );
}
