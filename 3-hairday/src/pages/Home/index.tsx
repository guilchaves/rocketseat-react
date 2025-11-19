import Container from "../../components/core/Container";
import DailyAppointments from "../../components/core/DailyAppointments";
import Sidebar from "../../components/core/Sidebar";

export default function HomePage() {
  return (
    <>
      <Container>
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3">
          <DailyAppointments />
        </div>
      </Container>
    </>
  );
}
