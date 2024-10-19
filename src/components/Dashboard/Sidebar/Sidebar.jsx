"use client";

import { GiCook } from "react-icons/gi";
import { SlFeed } from "react-icons/sl";
import logo from "@/assets/logoW.png";
import Image from "next/image";
import { BiHome, BiLogOut } from "react-icons/bi";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);

  const router = useRouter()

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success(`${user?.displayName}, you have logged out successfully`);
        router.push('/login')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-dark-green shadow-lg h-full p-4">
      <div>
        <div className="flex justify-center items-center mb-10">
          <Link href={"/"}>
            <Image width={60} height={60} src={logo} alt="logo" />
          </Link>
        </div>
        <ul className=" text-primary-white font-poppins text-base space-y-4">
          <li>
            <Link className="flex items-center gap-4" href={"/dashboard"}>
              <BiHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4"
              href={"/dashboard/create-recipe"}
            >
              <GiCook /> Create Recipe
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-4"
              href={"/dashboard/my-recipe"}
            >
              <GiCook /> My Recipe
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-4" href={"/recipe-feed"}>
              <SlFeed /> Recipe Feed
            </Link>
          </li>
        </ul>
        <div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-4 text-primary-white font-poppins text-base mt-4"
          >
            <BiLogOut className="text-2xl" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
