import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { GlobalStyles } from "../styles/GlobalStyles";

function Main() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
