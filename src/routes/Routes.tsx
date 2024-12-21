/** CUSTOM COMPONENTS */
import Error from "@error/index";
import Header from "@shared/components/layout/Header";

/** LIBRARIES */
import { lazy } from "react";
import { createBrowserRouter, Navigate, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";

/** OTHER */
import { loader as categoriesLoader } from "@categories/index";
import { loader as homeLoader } from "@home/index";

/** STYLED COMPONENTS */
import { StyledFallback } from "@shared/components/styled/StyledFallback";

const Home = lazy(() => import("@home/index"));
const Categories = lazy(() => import("@categories/index"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Header />,
      hydrateFallbackElement: <StyledFallback size="5em" />,
      errorElement: <Error />,
      children: [
        { index: true, loader: async () => redirect("home") },
        {
          path: "home",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "categories",
          element: <Categories />,
          loader: categoriesLoader,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/home" />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
