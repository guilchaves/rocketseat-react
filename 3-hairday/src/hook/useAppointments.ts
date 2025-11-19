import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointment";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useAppointments(selectedDate?: string) {
  const [appointmentsData] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    [],
  );
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isFetchingAppointments, setIsFetchingAppointments] =
    useState<boolean>(true);

  async function fetchAppointments(date: string) {
    if (!date) return;

    if (isFetchingAppointments) {
      await delay(500);
      setIsFetchingAppointments(false);
    }

    const filteredAppointments = appointmentsData.filter(
      (appointment) => appointment.date === date,
    );
    setAppointments(filteredAppointments);
    setIsFetchingAppointments(false);
  }

  useEffect(() => {
    if (selectedDate) {
      void fetchAppointments(selectedDate);
    }
  }, [appointmentsData, selectedDate]);

  return {
    fetchAppointments,
    morningAppointments: appointments.filter(
      (appointment) => appointment.daytime === "morning",
    ),
    afternoonAppointments: appointments.filter(
      (appointment) => appointment.daytime === "afternoon",
    ),
    eveningAppointments: appointments.filter(
      (appointment) => appointment.daytime === "evening",
    ),
    isFetchingAppointments,
  };
}
