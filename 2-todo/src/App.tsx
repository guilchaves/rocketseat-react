import { BrowserRouter, Route, Routes } from "react-router";
import ComponentsPage from "./pages/Components";
import HomePage from "./pages/Home";
import MainLayout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/componentes" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
