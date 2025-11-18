import DaySchedule from "../../components/core/DaySchedule";
import Container from "../../components/core/Container";
import Sidebar from "../../components/core/Sidebar";

export default function HomePage() {
  return (
    <>
      <Container>
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3">
          <DaySchedule />
        </div>
      </Container>
    </>
  );
}
