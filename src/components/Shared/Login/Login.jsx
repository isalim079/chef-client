/* eslint-disable react/no-unescaped-entities */
"use client";
import bg from "@/assets/Img/loginBg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import dynamic from "next/dynamic";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const router = useRouter();

  const { googleLogInPopup, passwordLogIn, passwordReset, user, path } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    passwordLogIn(email, password)
      .then((res) => {
        // console.log(res);
        toast.success("Login Successful");
        reset();
        // router.push('/')
        {
          path ? router.push(path) : router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage.split("/"));
        toast.error(`${errorMessage.split("/")[1]}`);
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    googleLogInPopup(provider)
      .then((res) => {
        // console.log(res);
        const userData = {
          name: res.user.displayName,
          email: res.user.email,
          role: "user",
          image: res.user.photoURL
        };

        axiosPublic.post("/register", userData).then((res) => {
          // console.log(res);
          if (res.data.insertedId === null) {
            toast.success(`Welcome back`);
          } else {
            toast.success(`Welcome to Chef`);
          }
          reset();
          {
            path ? router.push(path) : router.push("/");
          }
        });
      })
      .catch((err) => {
        console.log(err);
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage.split("/"));
        toast.error(`${errorMessage.split("/")[1]}`);
      });
  };

  return (
    <div className="font-poppins overflow-hidden">
      <div className="relative">
        <Image
          className="h-screen object-cover"
          src={bg}
          alt="login background"
        />
        <div className="absolute inset-0">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-dark-green/70 max-w-[480px] w-full p-6 lg:p-14 rounded-md">
              {/* form container */}
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <motion.h1
                  className="text-center text-3xl font-bold text-primary-orange"
                  initial={{ y: -750 }}
                  animate={{
                    y: 0,
                  }}
                >
                  Login
                </motion.h1>

                {/* Input container */}
                <div className="space-y-4 mt-10 ">
                  <motion.input
                    type="email"
                    placeholder="Email *"
                    className="p-3 rounded-md w-full"
                    initial={{ x: -1750 }}
                    animate={{
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      type: "spring",
                    }}
                    {...register("email", { required: true })}
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
                    className="p-3 rounded-md w-full"
                    {...register("password", { required: true })}
                  />
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
                  Login
                </motion.button>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.12, type: "spring" }}
                >
                  <p className="text-center text-primary-white text-sm">
                    Don't have an account?{" "}
                    <Link href={"/register"}>
                      <span className="text-base underline">Register</span>
                    </Link>
                  </p>
                </motion.div>
              </form>

              {/* Social Icon */}
              <div>
                <div className="flex flex-row justify-center items-center mt-5 gap-10">
                  <button onClick={handleGoogle} className="bg-primary-white p-2 rounded-full">
                    <FaGoogle className="text-2xl" />
                  </button>
                  <button className="bg-primary-white p-2 rounded-full">
                    <FaGithub className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
