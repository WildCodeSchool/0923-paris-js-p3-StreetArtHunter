import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import IntroPage from "./pages/IntroPage/IntroPage";
import HomePage from "./pages/HomePage/HomePage";
import AdminProfil from "./pages/AdminProfil/AdminProfil";
import Classement from "./pages/Classement/Classement";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SpotZone from "./pages/SpotZone/SpotZone";
import SubmitWork from "./pages/SubmitWork/SubmitWork";
import UserProfil from "./pages/UserProfil/UserProfil";
import Information from "./pages/Information/Information";
import ContactUs from "./pages/Contact/ContactUs/ContactUs";
import ComplimentUs from "./pages/Contact/ComplimentUs/ComplimentUs";
import Reclamation from "./pages/Contact/Reclamation/Reclamation";
import AskUs from "./pages/Contact/AskUs/AskUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <IntroPage />,
      },
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/adminprofil",
        element: <AdminProfil />,
      },
      {
        path: "/classement",
        element: <Classement />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/spotzone",
        element: <SpotZone />,
      },
      {
        path: "/submitwork",
        element: <SubmitWork />,
      },
      {
        path: "/userprofil",
        element: <UserProfil />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/askus",
        element: <AskUs />,
      },
      {
        path: "/complimentus",
        element: <ComplimentUs />,
      },
      {
        path: "/reclamation",
        element: <Reclamation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
