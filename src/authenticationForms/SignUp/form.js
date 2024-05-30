import React from "react";
import Input from "../../globalComponents/input";
import Button from "../../globalComponents/Button";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Enter details to create an account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <form>
              <Input
                type="text"
                placeholder="John Doe"
                label="Enter Your Full Name"
                width="w-full"
              />

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

              <Input
                type="password"
                placeholder="*********"
                label="Confirm Your Password"
                width="w-full"
              />
            </form>

            <Button
              label="Sign Up "
              width="w-full"
              background="bg-custom-header"
              textColor="text-white"
              onClick={handleSignIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
