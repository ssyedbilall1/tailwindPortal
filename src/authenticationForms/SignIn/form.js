import React from "react";
import Input from "../../globalComponents/input";
import Button from "../../globalComponents/Button";
import { NavLink, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Sign in to your account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <form>
              <Input
                type="email"
                placeholder="xyz@gmail.com"
                label="Enter Your Email"
                width="w-full"
              />

              <Input
                type="password"
                placeholder="*********"
                label="Enter Your Password"
                width="w-full"
              />
            </form>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <NavLink className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                Forgot password?
              </NavLink>
            </div>
            <Button
              label="Sign In"
              width="w-full"
              background="bg-custom-header"
              textColor="text-white"
              onClick={handleSignIn}
            />
            <p className="text-sm font-light text-black text-center">
              Dont have an account yet?{" "}
              <NavLink
                to="/signup"
                className="font-medium underline underline-offset-2"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
