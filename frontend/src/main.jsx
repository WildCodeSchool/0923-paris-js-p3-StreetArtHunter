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
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/AdminProfil",
        element: <AdminProfil />,
      },
      {
        path: "Classement",
        element: <Classement />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/SpotZone",
        element: <SpotZone />,
      },
      {
        path: "/SubmitWork",
        element: <SubmitWork />,
      },
      {
        path: "/UserProfil",
        element: <UserProfil />,
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
