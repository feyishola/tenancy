import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
import Accountformtext from "./pages/Accountformtext";
import ImageGridTexts from "./pages/ImageGridTexts";
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
import Login from "./components/LoginPage/Login";
import CreateAccountForm from "./components/CreateAccountPage/CreateAccountForm";
import SelectForm from "./components/FormPropertyPages/SelectPropertyForm";
import ImageUpload from "./components/ImageUploaderPage/ImageUploader";
import ListingDetails from "./components/ListingFormDetail/ListingDetails";

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
        path: "blessing",
        element: <Accountformtext />,
      },
      {
        path: "uyo",
        element: <ImageGridTexts />,
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
        path: "godwin",
        // element: <div><Login/></div>,
        // element: <div><CreateAccountForm/></div>,
        // element: <div><SelectForm/></div>,
        // element: <div><ImageUpload/></div>,
        element: (
          <div>
            <ListingDetails />
          </div>
        ),
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
    path: "/listedproperties",
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
