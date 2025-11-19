import Trash from "../../../../../assets/icons/trash.svg?react";
import useAppointment from "../../../../../hook/useAppointment";
import ButtonIcon from "../../../ButtonIcon";
import Typography from "../../../Typography";

interface ScheduleItemProps {
  id: string;
  time: string;
  clientName: string;
}

export default function ScheduleItem({
  id,
  time,
  clientName,
}: ScheduleItemProps) {
  const { deleteAppointment, isDeletingAppointment } = useAppointment();

  const handleDelete = (appointmentId: string) => {
    deleteAppointment(appointmentId);
  };

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
        <ButtonIcon
          icon={Trash}
          onClick={() => handleDelete(id)}
          handling={isDeletingAppointment}
        />
      </div>
    </div>
  );
}
