import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout/layout";
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
        path: "divine",
        element: <div>divine work</div>,
      },
      {
        path: "godwin",
        // element: <div><Login/></div>,
        // element: <div><CreateAccountForm/></div>,
        // element: <div><SelectForm/></div>,
        // element: <div><ImageUpload/></div>,
        element: <div><ListingDetails/></div>,

      },
      {
        path: "blessing",
        element: <div>blessing work</div>,
      },
    ],
  },
]);
export default router;
