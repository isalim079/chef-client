import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LoginLayout;
