import { useState } from "react";
import Typography from "../../ui/Typography";
import TextInput from "../../ui/TextInput";
import ScheduleList from "../../ui/ScheduleList";
import useAppointments from "../../../hook/useAppointments";

const getTodayISO = () => new Date().toISOString().split("T")[0];

export default function DailyAppointments() {
  const today = getTodayISO();
  const [selectedDate, setSelectedDate] = useState<string>(today);

  const {
    morningAppointments,
    afternoonAppointments,
    eveningAppointments,
    isFetchingAppointments,
  } = useAppointments(selectedDate);

  return (
    <div className="bg-gray-700 flex flex-col justify-center align-center p-20">
      <div className="flex justify-between mb-8">
        <div>
          <Typography as="h1" variant="title-lg">
            Sua agenda
          </Typography>
          <Typography as="p" variant="text-sm" className="text-gray-300">
            Selecione uma data para visualizar os agendamentos do dia
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

      <ScheduleList
        morningAppointments={morningAppointments}
        afternoonAppointments={afternoonAppointments}
        eveningAppointments={eveningAppointments}
        isLoading={isFetchingAppointments}
      />
    </div>
  );
}
