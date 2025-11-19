import { useState } from "react";
import Container from "../../components/core/Container";
import DailyAppointments from "../../components/core/DailyAppointments";
import Sidebar from "../../components/core/Sidebar";
import useAppointment from "../../hook/useAppointment";
import useAppointments from "../../hook/useAppointments";

export default function HomePage() {
  const today = new Date().toISOString().split("T")[0];

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [clientName, setClientName] = useState<string>("");

  const { createNewAppointment } = useAppointment();
  const {
    morningAppointments,
    afternoonAppointments,
    eveningAppointments,
    isLoading,
  } = useAppointments(selectedDate);

  const bookedTimes = [
    ...morningAppointments,
    ...afternoonAppointments,
    ...eveningAppointments,
  ].map((appointment) => appointment.time);

  return (
    <>
      <Container>
        <div className="w-1/3">
          <Sidebar
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            clientName={clientName}
            setClientName={setClientName}
            bookedTimes={bookedTimes}
            createNewAppointment={createNewAppointment}
          />
        </div>
        <div className="w-2/3">
          <DailyAppointments
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            morningAppointments={morningAppointments}
            afternoonAppointments={afternoonAppointments}
            eveningAppointments={eveningAppointments}
            isLoading={isLoading}
          />
        </div>
      </Container>
    </>
  );
}
