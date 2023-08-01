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
        <div className="-ml-3.5 bg-gray-900 h-6 w-6 rounded-full" />
        <div className="-mt-2">
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

const Resume = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen h-full flex justify-between items-start px-32 pt-32 bg-gradient-to-b from-[#19197030] to-[#19197040]">
        {/* Work history column */}

        <div className="flex-1">
          <div className="flex items-center justify-start gap-8">
            <div className="text-3xl rounded-full bg-indigo-800 p-4">
              <HiBookmark />
            </div>

            <p className="text-3xl font-semibold">work history</p>
          </div>

          {/* side line */}

          <div className="w-full h-full mx-8 border-l-2 border-gray-900 mb-10">
            <div className="relative pt-10">
              <Timeline startDate="2020" current />
              <div className="pt-10 mx-12">
                <p className="font-bold text-2xl -tracking-tighter mb-2">
                  FullStack Web Developer
                </p>
                <p className="font-bolder text-gray-400 uppercase mb-6">
                  Kotuko Nepal
                </p>

                <p className="-tracking-tight font-light text-lg">
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
                <p className="font-bold text-2xl -tracking-tighter mb-2">
                  Associate React JS Developer
                </p>
                <p className="font-bolder text-gray-400 uppercase mb-6">
                  Citytech IT, Nepal
                </p>

                <p className="-tracking-tight font-light text-lg">
                  I worked as a React JS developer, building multiple fintech
                  applications with React and NodeJS. I encouraged TDD while
                  developing applications.
                </p>
              </div>
            </div>

            <div className="relative pt-10">
              <Timeline startDate="2018" endDate="2020" />

              <div className="pt-10 mx-12">
                <p className="font-bold text-2xl -tracking-tighter mb-2">
                  Frontend Developer
                </p>
                <p className="font-bolder text-gray-400 uppercase mb-6">
                  National Incubation and Research Center, Nepal
                </p>

                <p className="-tracking-tight font-light text-lg">
                  I worked as a frontend developer, working with HTML5, CSS and
                  Jquery as i was starting my journey. I worked on multiple
                  projects ranging from food delivery to government application.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-8">
            <div className="text-3xl rounded-full bg-indigo-800 p-4">
              <MdSchool />
            </div>

            <p className="text-3xl font-semibold">education</p>
          </div>

          {/* side line */}

          <div className="w-full h-full mx-8 border-l-2 border-gray-900">
            <div className="relative pt-10">
              <Timeline startDate="2013" endDate="2017" />
              <div className="pt-10 mx-12">
                <p className="font-bold text-2xl -tracking-tighter mb-2">
                  BSC. CSIT
                </p>
                <p className="font-bolder text-gray-400 uppercase mb-6">
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
        <div className="flex-[0.5]">
          <Ribbon title="skills" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
