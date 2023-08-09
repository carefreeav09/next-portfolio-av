"use client";
import PageWrapper from "@/components/@app/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Gi3DGlasses } from "react-icons/gi";

import MyAsma from "../../../public/projects/myasma.jpg";
import Solful from "../../../public/projects/swotah.png";
import classNames from "classnames";

const Projects = () => {
  //
  const [activeTab, setActiveTab] = React.useState("all");
  const [selectedId, setSelectedId] = React.useState<number | null>(null);

  //
  const [projects] = React.useState([
    {
      id: 1,
      name: "Spectacles",
      description: "A portfolio website",
      tags: ["react", "typescript", "tailwindcss"],
      type: "webapp",
      thumbnail: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Spectacles 2",
      description: "A portfolio website 2",
      tags: ["react", "typescript", "tailwindcss"],
      type: "webapp",
      thumbnail: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Spectacles 3",
      description: "A portfolio website 3",
      tags: ["react", "typescript", "tailwindcss"],
      type: "mobile",
      thumbnail: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Spectacles 4",
      description: "A portfolio website 4",
      tags: ["react", "typescript", "tailwindcss"],
      type: "mobile",
      thumbnail: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Spectacles 5",
      description: "A portfolio website 5",
      tags: ["react", "typescript", "tailwindcss"],
      type: "mobile",
      thumbnail: "https://picsum.photos/200/300",
    },
  ]);

  //
  const getCurrentSelectedProject = () => {
    if (!selectedId) return null;

    return projects.find((p) => p.id === selectedId);
  };

  return (
    <PageWrapper>
      <div
        className={classNames(
          `min-h-screen h-full w-full py-12 xl:px-40 lg:px-24 md:px-20 px-16 relative`,
          selectedId ? "opacity-40" : "opacity-100"
        )}
        onClick={() => {
          selectedId && setSelectedId(null);
        }}
      >
        <div className="flex justify-center items-center h-[150px] flex-col gap-4 text-4xl">
          <Gi3DGlasses />
          <p className="text-5xl font-bold tracking-tighter"> portfolio </p>
        </div>

        <nav className="flex justify-center items-center gap-4">
          <div
            className="tracking-tighter font-bold text-sm cursor-pointer hover:underline "
            onClick={() => {
              setActiveTab("all");
            }}
          >
            ALL
          </div>

          <div
            className="tracking-tighter font-bold text-sm cursor-pointer hover:underline uppercase"
            onClick={() => {
              setActiveTab("webapp");
            }}
          >
            Web
          </div>

          <div
            className="tracking-tighter font-bold text-sm cursor-pointer hover:underline uppercase"
            onClick={() => {
              setActiveTab("mobile");
            }}
          >
            Mobile
          </div>
        </nav>

        <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <AnimatePresence mode={"wait"}>
            {projects
              .filter((p) => p.type === activeTab || activeTab === "all")
              .map((p) => (
                <motion.div
                  layout="preserve-aspect"
                  layoutId={p.id.toString()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  // exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring" }}
                  key={p.id}
                  className="flex flex-col justify-between items-start gap-4 bg-gray-900 rounded-lg shadow-lg"
                  onClick={() => setSelectedId(p.id)}
                >
                  <Image
                    src={p.thumbnail}
                    width={200}
                    height={200}
                    alt={`${p.name} alt`}
                    className="w-full h-60"
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex flex-col justify-start items-start gap-2">
                      <p className="text-xl font-bold tracking-tighter">
                        {p.name}
                      </p>
                      <p className="text-sm font-bold tracking-tighter text-gray-400">
                        {p.description}
                      </p>
                    </div>

                    <div className="flex justify-start items-center gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <div
                          key={t}
                          className="px-2 py-1 bg-gray-800 rounded-lg text-sm font-bold tracking-tighter"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode={"sync"}>
        {projects && selectedId && (
          <motion.div
            layout="preserve-aspect"
            layoutId={selectedId.toString()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            key={selectedId}
            className={classNames(
              "absolute top-[10%]  rounded-lg shadow-lg w-1/2",
              getCurrentSelectedProject()?.type === "webapp"
                ? "w-1/2 left-[25%]"
                : "w-1/3 left-[35%]"
            )}
          >
            <div className="flex flex-col justify-start items-start gap-4 bg-gray-900">
              <Image
                src={
                  getCurrentSelectedProject()?.type === "webapp"
                    ? Solful
                    : MyAsma
                }
                width={1800}
                height={900}
                alt={`alt`}
                className={
                  getCurrentSelectedProject()?.type === "webapp"
                    ? "w-full h-full"
                    : "w-60 m-auto"
                }
              />
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-start items-center gap-2">
                  {["react", "typescript", "tailwindcss"].map((t) => (
                    <div
                      key={t}
                      className="px-2 py-1 bg-gray-800 rounded-lg text-sm font-bold tracking-tighter"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-start items-start gap-2">
                  <p className="text-xl font-bold tracking-tighter">
                    {projects.find((p) => p.id === selectedId) &&
                      projects?.find((p) => p.id === selectedId)?.name}
                  </p>
                  <p className="text-sm font-bold tracking-tighter text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate dicta atque quae quod adipisci provident iusto,
                    libero sint ipsam, quo aut praesentium dolores repudiandae,
                    eligendi mollitia. Voluptas voluptatibus maxime error. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Quo
                    facere voluptatem ipsam architecto quasi. Omnis, molestias
                    eveniet veritatis cum cumque incidunt voluptatum dolorem
                    esse possimus iste voluptate amet neque facere!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Projects;
