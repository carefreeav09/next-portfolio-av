"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

//
import Image from "next/image";

//
import {
  HiHome,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlinePhone,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";

//
const iconStyles = {
  fontSize: "3rem",
  marginBottom: "0.5rem",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname, "pathname");
  //
  const [activeTab, setActiveTab] = useState("main");

  //
  return (
    <div className="flex items-stretch justify-start h-screen">
      <nav className="flex-[0.1] bg-gray-900 text-white flex items-between flex-col justify-between">
        <section>
          <Image
            priority
            src={"/images/pp.jpeg"}
            alt="profile-picture"
            width="1920"
            height={"1080"}
            className="w-full h-30"
          />

          <p className="bg-indigo-700 w-full text-center font-bold p-2 shadow-md shadow-indigo-900">
            Aabhushan
          </p>

          <div className="mt-10 flex flex-col gap-10">
            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => {
                router.push("/home/main");
              }}
            >
              <HiHome style={iconStyles} />

              <p>Home</p>
            </div>

            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => {
                router.push("/home/about");
              }}
            >
              <HiOutlineUser style={iconStyles} />

              <p>Know Me</p>
            </div>

            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => {
                router.push("/home/resume");
              }}
            >
              <HiOutlineDocumentText style={iconStyles} />

              <p>Resume</p>
            </div>

            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => {
                router.push("/home/projects");
              }}
            >
              <MdOutlineDashboard style={iconStyles} />

              <p>Projects</p>
            </div>

            <div
              className="flex items-center justify-center flex-col cursor-pointer"
              onClick={() => {
                router.push("/home/contact");
              }}
            >
              <HiOutlinePhone style={iconStyles} />

              <p>Contact</p>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white p-2 text-center">
          <p>1.0.0</p>
        </footer>
      </nav>

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default HomeLayout;
