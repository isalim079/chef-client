import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const RecipeFeedLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
      {children}
    </div>
  );
};

export default RecipeFeedLayout;
