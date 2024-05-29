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
import Help from "../pages/help";
import Logout from "../pages/logout";
import Profile from "../pages/profile";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrimaryLayout />}>
      <Route index element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/help" element={<Help />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
