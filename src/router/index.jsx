import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/login/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
