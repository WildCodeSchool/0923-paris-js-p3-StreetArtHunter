import React, { useEffect, useContext, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import useUser, { AuthProvider } from "./context/AuthContext";
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

// Route safe //
function PrivateRoute({ children }) {
  const { user, isLoading } = useContext(useUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (isLoading) setPage(<p>Loading...</p>);
    else if (!user) navigate("/login");
    else setPage(children);
    return () => setPage(null);
  }, [user, isLoading, location]);
  return page;
}
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
        element: (
          <PrivateRoute>
            <AdminProfil />
          </PrivateRoute>
        ),
      },
      {
        path: "/classement",
        element: (
          <PrivateRoute>
            <Classement />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <SubmitWork />
          </PrivateRoute>
        ),
      },
      {
        path: "/userprofilhistorical",
        element: (
          <PrivateRoute>
            <UserProfilHistorical />
          </PrivateRoute>
        ),
      },
      {
        path: "/userprofilclassement",
        element: (
          <PrivateRoute>
            <UserProfilClassement />
          </PrivateRoute>
        ),
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
            credentials: "include",
          });
        },
      },
      {
        path: "/information",
        element: (
          <PrivateRoute>
            <Information />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <ComplimentUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/reclamation",
        element: (
          <PrivateRoute>
            <Reclamation />
          </PrivateRoute>
        ),
      },
      {
        path: "/spotzonebyid/:location",
        element: (
          <PrivateRoute>
            <SpotZoneById />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Profil />
          </PrivateRoute>
        ),
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
