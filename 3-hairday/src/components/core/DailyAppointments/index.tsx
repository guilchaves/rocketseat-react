import Typography from "../../ui/Typography";
import TextInput from "../../ui/TextInput";
import ScheduleList from "../../ui/ScheduleList";
import type { Appointment } from "../../../models/appointment";

interface DailyAppointmentsProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  morningAppointments: Appointment[];
  afternoonAppointments: Appointment[];
  eveningAppointments: Appointment[];
  isLoading: boolean;
}

export default function DailyAppointments({
  selectedDate,
  setSelectedDate,
  morningAppointments,
  afternoonAppointments,
  eveningAppointments,
  isLoading,
}: DailyAppointmentsProps) {
  return (
    <>
      <div className="bg-gray-700 flex flex-col justify-center align-center p-20">
        <div className="flex justify-between mb-8">
          <div>
            <Typography as="h1" variant="title-lg">
              Sua agenda
            </Typography>
            <Typography as="p" variant="text-sm" className="text-gray-300">
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </Typography>
          </div>
          <div>
            <TextInput
              type="date"
              size="auto"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
        <div>
          <ScheduleList
            morningAppointments={morningAppointments}
            afternoonAppointments={afternoonAppointments}
            eveningAppointments={eveningAppointments}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
}
