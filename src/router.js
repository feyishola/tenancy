import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import LayoutWithSearch from "./layout/layoutwithsearch";
import LayoutWitoutFooter from "./layout/layoutwithoutfooter";
import Listedproperties from "./pages/listedproperties";

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
        element: <div>blessing work</div>,
      },
    ],
  },
  {
    path: "/searchbar",
    element: (
      <LayoutWithSearch>
        <Outlet />
      </LayoutWithSearch>
    ),
    children: [
      {
        index: true,
        element: <h1 className="font-unna">for SearchBar Pages</h1>,
      },
    ],
  },
  {
    path: "/nofooter",
    element: (
      <LayoutWitoutFooter>
        <Outlet />
      </LayoutWitoutFooter>
    ),
    children: [
      {
        index: true,
        element: <Listedproperties />,
      },
    ],
  },
]);
export default router;
