import useAppointments from "../../../../../hook/useAppointments";
import type { Appointment } from "../../../../../models/appointment";
import ScheduleItemSkeleton from "../../../ScheduleItemSkeleton";
import ScheduleItem from "../ScheduleItem";
import ScheduleHeader from "./components/ScheduleHeader";

interface ScheduleCardProps {
  daytime: "Manhã" | "Tarde" | "Noite";
  timeRange: string;
  appointments: Appointment[];
  isLoading: boolean;
}

export default function ScheduleCard({
  daytime,
  timeRange,
  appointments,
  isLoading,
}: ScheduleCardProps) {


  return (
    <div className="flex flex-col justify-center align-start p-0 border border-gray-600 rounded-lg">
      <ScheduleHeader daytime={daytime} timeRange={timeRange} />
      {appointments.length === 0 && !isLoading ? (
        <div className="py-6 px-5 text-gray-400 text-center">
          Nenhum agendamento
        </div>
      ) : isLoading ? (
        <div className="py-6 px-5 text-gray-400 text-center">
          <ScheduleItemSkeleton />
        </div>
      ) : (
        appointments.map((appointment) => (
          <ScheduleItem
            key={appointment.id}
            id={appointment.id}
            time={appointment.time}
            clientName={appointment.clientName}
          />
        ))
      )}
    </div>
  );
}
