import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import LayoutWithSearch from "./layout/layoutwithsearch";
import FormLayout from "./layout/formlayout";
import LayoutWitoutFooter from "./layout/layoutwithoutfooter";
import Listedproperties from "./pages/listedproperties";
import AvailableListing from "./pages/availableListing";
import Profile from "./pages/Profile/Profile";
import MapPage from "./pages/mappage";
import Mapform from "./components/mapform";
import Propertydetails from "./pages/propertydetails";
import LayoutWithoutCovid from "./layout/layoutwithoutcovid";
import NotificationsPage from "./pages/notificationspage";

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
      {
        path: "profile",
        element: <Profile />,
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
        path: "blessing",
        element: <AvailableListing />,
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
  {
    path: "/propertydetails",
    element: (
      <LayoutWithoutCovid>
        <Outlet />
      </LayoutWithoutCovid>
    ),
    children: [
      {
        index: true,
        element: <Propertydetails />,
      },
    ],
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
]);
export default router;
