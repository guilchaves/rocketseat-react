import TasksSummary from "../../components/core/TasksSummary";
import Container from "../../components/ui/Container";

function HomePage() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
    </Container>);
}

export default HomePage;
