import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Layout/Home/Home/Home";
import About from "../Pages/Layout/About/About";
import Appointment from "../Pages/Layout/Appointment/Appointment";
import Login from "../Pages/Layout/LogIn/Login";
import SignUp from "../Pages/Layout/SignUp/SignUp";
import ElectroGastrologyTherapy from "../Pages/Layout/Home/TabsPages/ElectroGastrologyTherapy/ElectroGastrologyTherapy";
import CosmeticDentistry from "../Pages/Layout/Home/TabsPages/CosmeticDentistry/CosmeticDentistry";
import DoctorContext from "../Pages/Layout/Home/HomeDoctors/DoctorContext";
import DoctorProfile from "../Pages/Layout/Home/HomeDoctors/DoctorProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "electro-gastrology-therapy",
        element: <ElectroGastrologyTherapy />,
      },
      {
        path: "cosmetic-dentistry",
        element: <CosmeticDentistry />,
      },
      {
        path: "/:id",
        element: (
          <DoctorContext>
            <DoctorProfile />
          </DoctorContext>
        ),
      },
    ],
  },
]);
