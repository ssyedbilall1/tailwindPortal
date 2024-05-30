import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../globalComponents/Button";
const Logout = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/");
  };
  return (
    <Button
      onClick={handleSignIn}
      label="Click me to logout"
      background="bg-custom-header"
      textColor="text-white"
    ></Button>
  );
};

export default Logout;
