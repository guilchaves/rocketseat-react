import Typography from "./components/ui/Typography";

function App() {
  return (
    <>
      <div className="space-y-2">
        <Typography variant="title-lg" as="h1">
          This is a large title
        </Typography>
        <Typography variant="title-md" as="h2">
          This is a medium title
        </Typography>
        <Typography variant="title-sm" as="h3">
          This is a small title
        </Typography>
        <Typography variant="text-md" as="p">
          This is a medium text
        </Typography>
        <Typography variant="text-sm" as="p">
          This is a small text
        </Typography>
      </div>
    </>
  );
}

export default App;
