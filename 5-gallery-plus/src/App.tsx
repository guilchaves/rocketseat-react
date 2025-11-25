import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layout-main";
import PageComponents from "./pages/page-components";
import HomePage from "./pages/page-home";
import PhotoDetailsPage from "./pages/page-photo-details";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route index element={<HomePage />} />
            <Route path="/fotos/:id" element={<PhotoDetailsPage />} />
            <Route path="/components" element={<PageComponents />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
