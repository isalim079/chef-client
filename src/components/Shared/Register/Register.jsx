"use client";
import bg from "@/assets/Img/loginBg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaFileUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";

import axios from "axios";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const { registerUser, handleUpdateUser, path } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const imageName = watch("image");

  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_BB_API_KEY}`;

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(image_hosting_api, formData);

      if (res.data.success) {
        const imageUrl = res.data.data.url;

        const userDetails = {
          name: data.name,
          email: data.email,
          password: data.password,
          image: imageUrl,
          role: "user",
          address: data.address,
        };

        registerUser(data.email, data.password).then((res) => {
          handleUpdateUser(data.name, imageUrl).then((res) => {
            axiosPublic.post("/register", userDetails).then((res) => {
              setLoading(false);
              reset();
              toast.success("Register Successful");
              {
                path ? router.push(path) : router.push("/");
              }
            });
          });
        });
      }
    } catch (err) {
      console.log(err);
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage.split("/"));
      toast.error(`${errorMessage.split("/")[1]}`);
    }
  };

  return (
    <div className="font-poppins overflow-hidden">
      <div className="relative ">
        <Image
          className="h-screen object-cover"
          src={bg}
          alt="Register background"
        />
        <div className="absolute inset-0">
          <div className="flex justify-center items-center h-screen">
            {/* form container */}
            <form
              className="flex flex-col  bg-dark-green/70 max-w-[480px] w-full p-6 lg:p-14 rounded-md"
              onSubmit={handleSubmit(onSubmit)}
            >
              <motion.h1
                className="text-center text-3xl font-bold text-primary-orange"
                initial={{ y: -750 }}
                animate={{
                  y: 0,
                }}
              >
                Register
              </motion.h1>

              {/* Input container */}
              <div className="space-y-4 mt-10 ">
                {/* prettier-ignore */}
                <motion.input
                  type=""  placeholder="Name *" className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white" 
                  initial={{ x: -1750 }}
                  animate={{ x: 0, }}
                  transition={{ duration: 1, delay: 0.3, type: "spring", }}
                  {...register('name', {required: true})}
                />
                <motion.input
                  type="email"
                  placeholder="Email *"
                  className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white"
                  initial={{ x: 1750 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 0.3, type: "spring" }}
                  {...register("email", { required: true })}
                />
                <motion.div
                  initial={{ x: -1750 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 0.3, type: "spring" }}
                  className=" relative rounded-md bg-primary-white/20"
                >
                  <input
                    type="file"
                    placeholder="Image *"
                    className="p-3 rounded-md w-full opacity-0 relative z-20 cursor-pointer"
                    {...register("image")}
                  />
                  <div className="text-primary-white flex items-center gap-5 absolute inset-0 left-3">
                    <FaFileUpload className="text-3xl " />
                    <p>
                      {imageName
                        ? imageName[0]?.name
                        : "Upload profile picture"}
                    </p>
                  </div>
                </motion.div>

                <motion.input
                  initial={{ x: -1750 }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                  }}
                  type="text"
                  placeholder="Address *"
                  className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white"
                  {...register("address", { required: true })}
                />

                <motion.input
                  initial={{ x: 1750 }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                  }}
                  type="password"
                  placeholder="Password *"
                  className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password should be 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 bg-white p-1 px-2 rounded-md">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                className="text-dark-green py-3 mt-4 bg-primary-white rounded-md"
                initial={{ y: 1750 }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                  type: "spring",
                }}
              >
                Register
              </motion.button>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.12, type: "spring" }}
              >
                <p className="text-center text-primary-white text-sm">
                  Already have an account?{" "}
                  <Link href={"/login"}>
                    <span className="text-base underline">Login</span>
                  </Link>
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Register), { ssr: false });
