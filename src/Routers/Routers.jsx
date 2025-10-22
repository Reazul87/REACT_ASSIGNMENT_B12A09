import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);
