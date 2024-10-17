"use client";

import axios from "axios";

// http://localhost:5000
//

const useAxiosPublic = () => {
  const instance = axios.create({
    baseURL: "http://localhost:5000",
  });

  return instance;
};

export default useAxiosPublic;
