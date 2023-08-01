"use client";

import React from "react";
import Icons from "@/components/@app/Icons";
import PageWrapper from "@/components/@app/PageWrapper";
import Ribbon from "@/components/@resuable/ribbon";
import Image from "next/image";

//
import { easeOut, motion } from "framer-motion";
import { item, container } from "@/utils/common.utils";

//

//
const About = () => {
  return (
    <PageWrapper>
      <motion.div
        className="flex items-center justify-center gap-20 h-screen flex-col my-20"
        variants={container}
        initial={"hidden"}
        animate={"show"}
      >
        <motion.div variants={item}>
          <Ribbon title="Services" />
        </motion.div>

        <motion.div
          className="flex justify-between gap-12 mt-10 mb-4"
          variants={item}
        >
          <div className="flex justify-center items-center flex-col gap-4">
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.5,
                  ease: easeOut,
                },
              }}
            >
              <Image
                src={"/images/svg/nextjs.svg"}
                alt="svg logo"
                width={200}
                height={200}
                className="h-16 w-16 cursor-pointer"
              />
            </motion.div>
            <p className="font-bold text-2xl tracking-tighter">Fullstack</p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Build fullstack applications using React/NextJS and Node/Express
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4">
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.5,
                  ease: easeOut,
                },
              }}
            >
              <Image
                src={"/images/react.png"}
                alt="svg logo"
                width={200}
                height={200}
                className="h-16 w-16 cursor-pointer"
              />
            </motion.div>
            <p className="font-bold text-2xl tracking-tighter">React Native</p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Create hybrid mobile applications for Android and IOS using React
              Native.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4">
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.5,
                  ease: easeOut,
                },
              }}
            >
              <Image
                src={"/images/googlescripts.png"}
                alt="svg logo"
                width={200}
                height={200}
                className="h-16 w-16 cursor-pointer"
              />
            </motion.div>
            <p className="font-bold text-2xl tracking-tighter">
              Google Scripts
            </p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Manage email automations, google sheets manipulation with google
              apps scripts
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4">
            <motion.div
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.5,
                  ease: easeOut,
                },
              }}
            >
              <Image
                src={"/images/wordpress.png"}
                alt="svg logo"
                width={200}
                height={200}
                className="h-16 w-16 cursor-pointer"
              />
            </motion.div>
            <p className="font-bold text-2xl tracking-tighter">Wordpress</p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Build custom plugins using gutenberg blocks and create beautiful
              templates.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <Ribbon title="Skills" />
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-5 gap-6 gap-y-6"
          variants={item}
        >
          <motion.div
            whileHover={{
              rotate: 180,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="react" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="js" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="node" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="ionic" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="html5" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="css3" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="php" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="wordpress" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="nextjs" />
          </motion.div>

          <motion.div
            whileHover={{
              rotate: 180,
              transition: {
                duration: 1,
              },
            }}
          >
            <Icons name="graphql" />
          </motion.div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};

export default About;
