import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import IntroPage from "./pages/IntroPage/IntroPage";
import HomePage from "./pages/HomePage/HomePage";
import AdminProfil from "./pages/AdminProfil/AdminProfil";
import Classement from "./pages/Classement/Classement";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SpotZone from "./pages/SpotZone/SpotZone";
import SubwitWorkImport from "./components/InputSubmitWork/SubmitWorkImport";
import SubmitWorkValidation from "./components/InputSubmitWork/SubmitWorkValidation";
import SubmitWorkThank from "./components/InputSubmitWork/SubmitWorkThank";
import UserProfil from "./pages/UserProfil/UserProfil";
import Information from "./pages/Information/Information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <IntroPage />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`);
        },
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
        path: "/submitworkimport",
        element: <SubwitWorkImport />,
      },
      {
        path: "/submitworkvalidation",
        element: <SubmitWorkValidation />,
      },
      {
        path: "/submitworkthank",
        element: <SubmitWorkThank />,
      },

      {
        path: "/userprofil",
        element: <UserProfil />,
      },
      {
        path: "/information",
        element: <Information />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
