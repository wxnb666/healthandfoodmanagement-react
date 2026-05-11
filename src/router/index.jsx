import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/login/login";
import Layout from "@/pages/home/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/layout",
    element: <Layout></Layout>,
  },
]);

export default router;
