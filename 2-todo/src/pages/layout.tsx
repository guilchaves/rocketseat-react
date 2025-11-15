import { Outlet } from "react-router";
import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Main from "../components/core/Main";

function LayoutMain() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default LayoutMain;
