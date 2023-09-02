"use client";

import React from "react";
import { HiBookmark, HiDownload } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";

//
import TimelineBanner from "@/components/@resuable/timeline-banner";
import Ribbon from "@/components/@resuable/ribbon";
import PageWrapper from "@/components/@app/PageWrapper";

const Timeline: React.FC<{
  startDate: string;
  endDate?: string;
  current?: boolean;
}> = ({ startDate, endDate, current }) => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="-ml-3.5 bg-secondary h-6 w-6 rounded-full" />
        <div className="-mt-[3px] ml-1">
          <TimelineBanner
            startDate={startDate}
            endDate={endDate}
            current={current}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 0.5,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Resume = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen h-full pt-32">
        {/* Work history column */}
        <div className="w-11/12 m-auto flex justify-around items-start">
          <div className="flex-1">
            <div className="flex items-center justify-start gap-8">
              <div className="text-2xl rounded-full bg-indigo-800 p-4">
                <HiBookmark />
              </div>

              <p className="text-3xl font-semibold">work history</p>
            </div>
            {/* side line */}
            <div className="w-full h-full mx-8 border-l-2 border-gray-900 mb-10">
              <div className="relative pt-10">
                <Timeline startDate="2020" current />
                <div className="pt-10 mx-12">
                  <p className="font-bold text-xl -tracking-tighter mb-2">
                    FullStack Web Developer
                  </p>
                  <p className="font-bolder text-gray-400 uppercase mb-6 text-sm">
                    Kotuko Nepal
                  </p>

                  <p className="-tracking-tight font-light text-base w-10/12">
                    I currently work for Kotuko Nepal, a regional branch of
                    multi-national organizaion, Kotuko IT. I primarily work as a
                    frontend lead, mentor, creating clean code structure and
                    reusable layouts.
                  </p>
                </div>
              </div>

              <div className="relative pt-10">
                <Timeline startDate="2018" endDate="2020" />

                <div className="pt-10 mx-12">
                  <p className="font-bold text-xl -tracking-tighter mb-2">
                    Associate React JS Developer
                  </p>
                  <p className="font-bolder text-gray-400 uppercase mb-6 text-sm">
                    Citytech IT, Nepal
                  </p>

                  <p className="-tracking-tight font-light text-base w-10/12">
                    I worked as a React JS developer, building multiple fintech
                    applications with React and NodeJS. I encouraged TDD while
                    developing applications.
                  </p>
                </div>
              </div>

              <div className="relative pt-10">
                <Timeline startDate="2018" endDate="2020" />

                <div className="pt-10 mx-12">
                  <p className="font-bold text-xl -tracking-tighter mb-2">
                    Frontend Developer
                  </p>
                  <p className="font-bolder text-gray-400 uppercase mb-6 text-sm">
                    National Incubation and Research Center, Nepal
                  </p>

                  <p className="-tracking-tight font-light text-base w-10/12">
                    I worked as a frontend developer, working with HTML5, CSS
                    and Jquery as i was starting my journey. I worked on
                    multiple projects ranging from food delivery to government
                    application.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-8">
              <div className="text-3xl rounded-full bg-indigo-800 p-4">
                <MdSchool />
              </div>

              <p className="text-2xl font-semibold">education</p>
            </div>
            {/* side line */}
            <div className="w-full h-full mx-8 border-l-2 border-gray-900">
              <div className="relative pt-10">
                <Timeline startDate="2013" endDate="2017" />
                <div className="pt-10 mx-12">
                  <p className="font-bold text-xl -tracking-tighter mb-2">
                    BSC. CSIT
                  </p>
                  <p className="font-bolder text-gray-400 uppercase mb-6 text-sm">
                    Deerwalk Institue of Technology
                  </p>
                </div>
              </div>
            </div>
            {/* Button */}
            <motion.div
              className="flex items-center justify-center px-6 py-4 border-4 rounded-md border-gray-800 max-w-xs my-10 text-lg gap-4 cursor-pointer"
              whileTap={{
                scale: 0.9,
              }}
            >
              <HiDownload />
              <p className="text-bold text-xl lowercase">Download CV</p>
            </motion.div>
          </div>
          <div className="flex-[0.5] flex justify-center items-center flex-col">
            <Ribbon title="skills" />

            <div className="mt-20 bg-red grid grid-cols-2 gap-x-6">
              <SkillsCircle
                title={"React/Native"}
                percentage={90}
                color="#3730a3"
              />

              <SkillsCircle title={"NextJS"} percentage={80} color="#4f46e5" />

              <SkillsCircle title={"NodeJS"} percentage={70} color="#ea580c" />

              <SkillsCircle
                title={"Tailwind/CSS"}
                percentage={90}
                color="#4f46e5"
              />

              <SkillsCircle title={"TS & JS"} percentage={75} color="#ea580c" />

              <SkillsCircle title={"CSS"} percentage={90} color="#3730a3" />

              <SkillsCircle
                title={"Wordpress"}
                percentage={60}
                color="#dc2626"
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;

const SkillsCircle: React.FC<{
  title: string;
  percentage: number;
  color: string;
}> = ({ title, percentage, color }) => (
  <div className="mb-8">
    <motion.svg
      width={"110"}
      height={"110"}
      viewBox={"0 0 110 110"}
      initial="hidden"
      animate="visible"
    >
      <g>
        <motion.circle
          cx="55"
          cy="55"
          r="45"
          stroke={color}
          custom={1}
          strokeWidth={6}
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: percentage / 100,
            opacity: 1,
            rotate: 270,
            transition: {
              pathLength: {
                delay: 1,
                type: "spring",
                duration: 1.5,
              },
              opacity: { delay: 1, duration: 0.01 },
            },
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke={color}
          strokeWidth="2px"
          alignmentBaseline="middle"
        >
          {percentage}%
        </text>
      </g>
    </motion.svg>
    <p className={`text-center font-bold text-base text-[${color}]`}>{title}</p>
  </div>
);
