import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import PrimaryLayout from "../layout/primaryLayout";
import Home from "../pages/home";
import Service from "../pages/service";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrimaryLayout />}>
      <Route index element={<Home />} />
      <Route path="/service" element={<Service />} />
    </Route>
  )
);

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
