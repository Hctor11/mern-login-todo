import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
import Login from "./routes/Login";
import Singup from "./routes/Singup.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //importamos
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import AuthProvider from "./auth/AuthProvider.tsx";

//creamos router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/Signup",
    element: <Singup />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
