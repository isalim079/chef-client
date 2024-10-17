import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RegisterLayout;
