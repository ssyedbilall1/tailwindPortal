import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import PrimaryLayout from "../layout/primaryLayout";
import AuthLayout from "../layout/AuthLayout";
import Home from "../pages/home";
import Service from "../pages/service";
import Help from "../pages/help";
import Logout from "../pages/logout";
import Profile from "../pages/profile";
import SignUp from "../authenticationForms/SignUp";
import SignIn from "../authenticationForms/SignIn";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrimaryLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </>
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
