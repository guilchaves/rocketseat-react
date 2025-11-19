import { useState } from "react";
import { TIME_SLOTS } from "../../../constants/timeSlots";
import { getDaytime, getTodayISO } from "../../../helpers/utils";
import { type Appointment } from "../../../models/appointment";
import Button from "../../ui/Button";
import TextInput from "../../ui/TextInput";
import Typography from "../../ui/Typography";
import { FormSection } from "./components/FormSection";
import { TimeSlotGroup } from "./components/TimeSlotGroup";
import useAppointment from "../../../hook/useAppointment";
import useAppointments from "../../../hook/useAppointments";

export default function Sidebar() {
  const today = getTodayISO();

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [clientName, setClientName] = useState<string>("");

  const { createNewAppointment } = useAppointment();
  const { morningAppointments, afternoonAppointments, eveningAppointments } =
    useAppointments(selectedDate);

  const bookedTimes = [
    ...morningAppointments,
    ...afternoonAppointments,
    ...eveningAppointments,
  ].map((appointment) => appointment.time);

  const isFormValid = Boolean(
    selectedDate && selectedTime && clientName.trim(),
  );

  const resetForm = (): void => {
    setSelectedTime(null);
    setClientName("");
  };

  const handleSchedule = (): void => {
    if (!isFormValid || !selectedTime) return;

    const appointment: Appointment = {
      id: Math.random().toString(36).substring(2, 9),
      date: selectedDate,
      time: selectedTime,
      daytime: getDaytime(selectedTime),
      clientName: clientName.trim(),
    };

    createNewAppointment(appointment);
    resetForm();
  };

  return (
    <div className="bg-gray-700 max-w-[498px] rounded-lg flex flex-col justify-center align-center p-20">
      <div className="mb-6 space-y-2">
        <Typography as="h1" variant="title-lg">
          Agende um atendimento
        </Typography>
        <Typography as="p" variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Typography>
      </div>

      <FormSection title="Data" className="mb-8">
        <TextInput
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </FormSection>

      <FormSection title="Horários" className="mb-8">
        <TimeSlotGroup
          label="Manhã"
          times={TIME_SLOTS.morning}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
          bookedTimes={bookedTimes}
        />
        <TimeSlotGroup
          label="Tarde"
          times={TIME_SLOTS.afternoon}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
          bookedTimes={bookedTimes}
        />
        <TimeSlotGroup
          label="Noite"
          times={TIME_SLOTS.evening}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
          bookedTimes={bookedTimes}
        />
      </FormSection>

      <FormSection title="Cliente" className="mb-6">
        <TextInput
          type="text"
          placeholder="Nome do cliente"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </FormSection>

      <Button onClick={handleSchedule} disabled={!isFormValid}>
        Agendar
      </Button>
    </div>
  );
}
