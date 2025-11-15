import TaskList from "../../components/core/TaskList";
import TasksSummary from "../../components/core/TasksSummary";
import Container from "../../components/ui/Container";

function HomePage() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      <TaskList />
    </Container>
  );
}

export default HomePage;
