import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import Accountformtext from "./pages/Accountformtext";
import ImageGridTexts from "./pages/ImageGridTexts"

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
        element: <div>godwin work</div>,
      },
      {
        path: "blessing",
        element: <Accountformtext />,
      },
      {
        path: "uyo",
        element: <ImageGridTexts />,
      },
    ],
  },
]);
export default router;
