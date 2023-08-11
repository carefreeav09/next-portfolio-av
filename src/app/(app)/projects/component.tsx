"use client";
import PageWrapper from "@/components/@app/PageWrapper";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Gi3DGlasses } from "react-icons/gi";

import Image from "next/image";
import { IProject } from "./types";

const ProjectsComponent = ({ projects }: { projects: IProject[] }) => {
  //
  const [activeTab, setActiveTab] = React.useState("all");
  const [selectedId, setSelectedId] = React.useState<number | null>(null);

  //
  const getCurrentSelectedProject = () => {
    if (!selectedId) return null;

    return projects.find((p) => p._id === selectedId);
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
          <AnimatePresence mode={"sync"}>
            {projects
              .filter((p) => p.appType === activeTab || activeTab === "all")
              .map((p) => (
                <motion.div
                  layout="preserve-aspect"
                  layoutId={p?._id?.toString()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  // exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring" }}
                  key={p._id}
                  className="flex flex-col justify-between items-start gap-4 bg-gray-900 rounded-lg shadow-lg"
                  onClick={() => setSelectedId(p._id)}
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
                      {p.technologies.map((t) => (
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
              getCurrentSelectedProject()?.appType === "webapp"
                ? "w-1/2 left-[25%]"
                : "w-1/3 left-[35%]"
            )}
          >
            <div className="flex flex-col justify-start items-start gap-4 bg-gray-900">
              <Image
                src={"https://picsum.photos/200/300"}
                width={1800}
                height={900}
                alt={`alt`}
                className={
                  getCurrentSelectedProject()?.appType === "webapp"
                    ? "w-full h-full"
                    : "w-full m-auto"
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
                    {projects.find((p) => p._id === selectedId) &&
                      projects?.find((p) => p._id === selectedId)?.name}
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

export default ProjectsComponent;
