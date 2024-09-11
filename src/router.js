import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import LayoutWithSearch from "./layout/layoutwithsearch";
import FormLayout from "./layout/formlayout";
import LayoutWitoutFooter from "./layout/layoutwithoutfooter";
import Listedproperties from "./pages/listedproperties";
import MapPage from "./pages/mappage";
import Mapform from "./components/mapform";

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
      {
        path: "firstmap",
        element: <MapPage />,
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
      // {
      //   path: "form1",
      //   element: <Mapform />,
      // },
    ],
  },
  {
    path: "/form",
    element: (
      <FormLayout>
        <Outlet />
      </FormLayout>
    ),
    children: [
      {
        index: true,
        element: <Mapform />,
      },
    ],
  },
]);
export default router;
