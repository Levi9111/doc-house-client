import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Layout/Home/Home";
import About from "../Pages/Layout/About/About";
import Appointment from "../Pages/Layout/Appointment/Appointment";
import Login from "../Pages/Layout/LogIn/Login";
import SignUp from "../Pages/Layout/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
