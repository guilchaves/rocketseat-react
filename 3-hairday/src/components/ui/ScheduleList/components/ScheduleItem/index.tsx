import Trash from "../../../../../assets/icons/trash.svg?react";
import ButtonIcon from "../../../ButtonIcon";
import Typography from "../../../Typography";

interface ScheduleItemProps {
  id: string;
  time: string;
  clientName: string;
  onDelete?: (id: string) => void;
}

export default function ScheduleItem({
  id,
  time,
  clientName,
  onDelete,
}: ScheduleItemProps) {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-5">
      <div className="flex gap-5">
        <Typography as="p" variant="title-md" className="text-gray-200">
          {time}
        </Typography>
        <Typography as="p" variant="text-md" className="text-gray-200">
          {clientName}
        </Typography>
      </div>
      <div>
        <ButtonIcon icon={Trash} onClick={() => onDelete?.(id)} />
      </div>
    </div>
  );
}
