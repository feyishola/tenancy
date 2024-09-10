import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "divine",
        element: <div>divine work</div>,
      },
      {
        path: "godwin",
        element: <div><Login/></div>,
      },
      {
        path: "blessing",
        element: <div>blessing work</div>,
      },
    ],
  },
]);
export default router;
