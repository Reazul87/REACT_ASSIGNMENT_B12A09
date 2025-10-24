import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Loading from "../Components/Loading";
import PrivateRouters from "../PrivateRouters/PrivateRouters";
import PlantsDetails from "../Pages/PlantsDetails";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/plants-details/:id",
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRouters>
            <PlantsDetails></PlantsDetails>
          </PrivateRouters>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouters>
            <Profile></Profile>
          </PrivateRouters>
        ),
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
