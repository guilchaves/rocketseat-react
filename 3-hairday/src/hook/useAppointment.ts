import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { type Appointment, APPOINTMENTS_KEY } from "../models/appointment";
import { delay } from "../helpers/utils";

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
  }

  async function deleteAppointment(appointmentId: string) {
    setIsDeletingAppointment(true);
    await delay(500);
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
