"use client";

import { GiCook } from "react-icons/gi";
import { SlFeed } from "react-icons/sl";
import logo from "@/assets/logoW.png";
import Image from "next/image";
import { BiHome, BiLogOut } from "react-icons/bi";
import Link from "next/link";
import dynamic from "next/dynamic";

const Sidebar = () => {


  return (
    <div className="bg-dark-green shadow-lg h-full rounded-lg p-10">
      <div>
        <div className="flex justify-center items-center mb-10">
          <Link href={"/"}>
            <Image width={60} height={60} src={logo} alt="logo" />
          </Link>
        </div>
        <ul className=" text-primary-white font-poppins text-lg space-y-4">
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
            <Link className="flex items-center gap-4" href={"/recipe-feed"}>
              <SlFeed /> Recipe Feed
            </Link>
          </li>
        </ul>
        <div>
          <button
         
            className="flex items-center gap-4 text-primary-white font-poppins text-lg mt-4"
          >
            <BiLogOut className="text-2xl" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
