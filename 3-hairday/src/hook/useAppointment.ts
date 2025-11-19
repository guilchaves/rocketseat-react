import useLocalStorage from "use-local-storage";
import { type Appointment, APPOINTMENTS_KEY } from "../models/appointment";
import { useState } from "react";

export default function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    [],
  );
  const [isDeletingAppointment, setIsDeletingAppointment] =
    useState<boolean>(false);

  function createNewAppointment(newAppointment: Appointment) {
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    console.log("Agendamento criado:", updatedAppointments);
  }

  function deleteAppointment(appointmentId: string) {
    setIsDeletingAppointment(true);
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId,
    );
    setAppointments(updatedAppointments);
    setIsDeletingAppointment(false);
  }

  return {
    appointments,
    createNewAppointment,
    deleteAppointment,
    isDeletingAppointment,
  };
}
