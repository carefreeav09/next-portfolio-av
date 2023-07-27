"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/@app/PageWrapper";

type Role = string;

const ROLES_LIST = [
  "Full Stack Developer",
  "React Native Developer",
  "Chelsea FC fan",
  "Video Gamer",
];

const MainPageContent = () => {
  //
  const [roles, setRoles] = useState<Role>("Full Stack Developer");

  //
  useEffect(() => {
    const interval = setInterval(() => {
      setRoles((prevRole) => {
        const currentIndex = ROLES_LIST.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % ROLES_LIST.length;
        return ROLES_LIST[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div
        className="h-screen relative"
        style={{
          backgroundImage:
            "linear-gradient(#00000990, #000000e6), url(/images/pp.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute bottom-[10%] text-center w-full">
          <p className="text-2xl text-gray-900 mb-4">Hi, I am</p>
          <p className="text-5xl font-bold mb-4">Aabhushan Gautam</p>
          <p className="text-2xl text-gray-900">
            I am a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <strong>{roles}</strong>
              </motion.span>
            </AnimatePresence>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MainPageContent;
