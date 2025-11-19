import ScheduleCard from "./components/ScheduleCard";
import { type Appointment } from "../../../models/appointment";

interface ScheduleListProps {
  morningAppointments: Appointment[];
  afternoonAppointments: Appointment[];
  eveningAppointments: Appointment[];
  isLoading: boolean;
}

export default function ScheduleList({
  morningAppointments,
  afternoonAppointments,
  eveningAppointments,
  isLoading,
}: ScheduleListProps) {
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-4">
      <ScheduleCard
        daytime="Manhã"
        timeRange="09h-12h"
        appointments={morningAppointments}
      />
      <ScheduleCard
        daytime="Tarde"
        timeRange="13h-18h"
        appointments={afternoonAppointments}
      />
      <ScheduleCard
        daytime="Noite"
        timeRange="19h-21h"
        appointments={eveningAppointments}
      />
    </div>
  );
}
