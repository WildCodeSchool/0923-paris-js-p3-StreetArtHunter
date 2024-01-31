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
import SubmitWork from "./pages/SubmitWork/SubmitWork";
import UserProfilHistorical from "./components/InputUserProfil/UserProfilHistorical";
import UserProfilClassement from "./components/InputUserProfil/UserProfilClassement";
import Information from "./pages/Information/Information";
import ContactUs from "./pages/Contact/ContactUs/ContactUs";
import ComplimentUs from "./pages/Contact/ComplimentUs/ComplimentUs";
import Reclamation from "./pages/Contact/Reclamation/Reclamation";
import AskUs from "./pages/Contact/AskUs/AskUs";
import SpotZoneById from "./pages/SpotZoneById/SpotZoneById";
import Profil from "./pages/Profil/Profil";

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
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/image`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/adminprofil",
        element: <AdminProfil />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/image`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/classement",
        element: <Classement />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
            credentials: "include",
          });
        },
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
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/location`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/submitwork",
        element: <SubmitWork />,
      },
      {
        path: "/userprofilhistorical",
        element: <UserProfilHistorical />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/image`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/userprofilclassement",
        element: <UserProfilClassement />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
            credentials: "include",
          });
        },
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
      {
        path: "/spotzonebyid/:location",
        element: <SpotZoneById />,
        loader: ({ params }) => {
          return fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/location/${
              params.location
            }`,
            {
              credentials: "include",
            }
          );
        },
      },
      {
        path: "/profil",
        element: <Profil />,
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
