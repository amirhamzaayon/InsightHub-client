import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Layouts/HomeLayout";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { ServiceCards } from "../Components/ServiceCards";
import { FeaturesLayout } from "../Layouts/FeaturesLayout";
import { MyServicesPage } from "../Pages/MyServicesPage";
import { MyReviewsPage } from "../Pages/MyReviewsPage";
import PrivateRoute from "./PrivateRoute";
import { ServiceDetailsPage } from "@/Pages/ServiceDetailsPage";
import AddServicePopupForm from "@/Components/PopupForm/AddServicePopupForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <ServiceCards></ServiceCards>,
        // loader: fetch()
      },
    ],
  },
  {
    path: "/ServiceDetailsPage/:id",
    element: <ServiceDetailsPage></ServiceDetailsPage>,
    loader: ({ params }) =>
      fetch(`https://insight-hub-server.vercel.app/services/${params.id}`),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/features",
    element: (
      <PrivateRoute>
        <FeaturesLayout></FeaturesLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/features/MyServices",
        element: <MyServicesPage></MyServicesPage>,
      },
      {
        path: "/features/MyReviews",
        element: <MyReviewsPage></MyReviewsPage>,
      },
      {
        path: "/features/AddService",
        element: <AddServicePopupForm></AddServicePopupForm>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
