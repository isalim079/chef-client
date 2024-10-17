"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success(`${user?.displayName}, you have logged out successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="overflow-hidden absolute z-30 bg-primary-white/70 w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full ">
              <div className="flex-none lg:hidden ">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <CgMenu className="text-2xl" />
                </label>
              </div>
              <div className="mx-2 flex-1 px-2  justify-end lg:justify-start">
                <Link href={"/"}>
                  <Image className="w-14" src={logo} alt="logo" />
                </Link>
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal items-center font-normal">
                  {/* Navbar menu content here */}
                  <li>
                    <Link href={"/recipe-feed"}>Recipe Feed</Link>
                  </li>

                  <div className="">
                    {user ? (
                      <div className="">
                        <Link href={"/dashboard"}>
                          <button className="px-4 py-2 rounded-md bg-dark-green shadow-sm text-primary-white mr-4">
                            Dashboard
                          </button>
                        </Link>

                        <button
                          onClick={handleSignOut}
                          className="px-4 py-2 rounded-md bg-dark-green shadow-sm text-primary-white"
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Link href={"/login"}>
                          <button className="px-4 font-normal py-2 rounded-md bg-dark-green shadow-sm text-primary-white">
                            Login
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
