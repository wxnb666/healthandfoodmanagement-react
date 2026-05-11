import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/login/login";
import Home from "@/pages/layout/layout";
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
    element: <Home></Home>,
    children: [
      {
        path: "home",
        element: <div>首页内容</div>,
      },
      {
        path: "user",
        element: <div>用户管理内容</div>,
      },
      {
        path: "health",
        element: <div>健康数据内容</div>,
      },
      {
        path: "diet",
        element: <div>饮食管理内容</div>,
      },
    ],
  },
]);

export default router;
