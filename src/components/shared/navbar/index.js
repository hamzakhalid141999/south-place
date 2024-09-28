"use client";

import React from "react";
import navbar_logo from "../../../assets/navbar/navbar_logo.svg";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed mx-auto top-[30px] w-[85%] h-[66px] p-[12px] bg-[#ffffff80] navbar rounded-[100px] z-[10000000]">
      <div className="w-full h-full grid grid-cols-[2fr,4fr,2fr]">
        <div className="w-full h-full flex flex-row items-center pl-[20px]">
          <img
            onClick={() => {
              router.push("/");
            }}
            src={navbar_logo.src}
            className="h-[80%]"
          />
        </div>

        <div className="w-full h-full flex flex-row justify-center items-center gap-x-[20px]">
          <p
            onClick={() => {
              router.push("/");
            }}
            className="text-[16px] text-black font-regular duration-200 ease-out hover:opacity-60 hover:cursor-pointer"
          >
            Home
          </p>

          <p className="text-[16px] text-black font-regular duration-200 ease-out hover:opacity-60 hover:cursor-pointer">
            Project
          </p>

          <p className="text-[16px] text-black font-regular duration-200 ease-out hover:opacity-60 hover:cursor-pointer">
            About Us
          </p>

          <p
            onClick={() => {
              router.push("/development");
            }}
            className="text-[16px] text-black font-regular duration-200 ease-out hover:opacity-60 hover:cursor-pointer"
          >
            Development
          </p>

          <p className="text-[16px] text-black font-regular duration-200 ease-out hover:opacity-60 hover:cursor-pointer">
            Financial
          </p>
        </div>

        <div className="h-full w-full flex flex-row items-end justify-end">
          <div className="h-full w-fit px-[30px] bg-white grid place-items-center rounded-[100px] duration-200 ease-out hover:opacity-70 hover:cursor-pointer">
            <p className="text-black font-[18px]">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
