import PageWrapper from "@/components/@app/PageWrapper";
import Ribbon from "@/components/@resuable/ribbon";
import Image from "next/image";
import React from "react";
import { HiOutlineUser } from "react-icons/hi";

const About = () => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center gap-10 h-screen flex-col">
        {/* Page Title -> this could be a component */}
        <div className="flex items-center justify-center flex-col cursor-pointer">
          <HiOutlineUser
            className={
              "h-20 w-20 p-4 border-white border rounded-full bg-transparent"
            }
          />

          <p
            className="mt-4 text-4xl text-gray-400 font-bold"
            style={{
              letterSpacing: "-2px",
            }}
          >
            about me
          </p>
        </div>

        <Ribbon title="Services" />

        <div className="flex justify-between gap-12 mt-10">
          <div className="flex justify-center items-center flex-col gap-4">
            <Image
              src={"/images/nextjs.svg"}
              alt="svg logo"
              width={200}
              height={200}
              className="h-16 w-16"
            />
            <p className="font-bold text-2xl tracking-tighter">Fullstack</p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Build fullstack applications using React/NextJS and Node/Express
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4">
            <Image
              src={"/images/react.png"}
              alt="svg logo"
              width={200}
              height={200}
              className="h-16 w-16"
            />
            <p className="font-bold text-2xl tracking-tighter">React Native</p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Create hybrid mobile applications for Android and IOS using React
              Native.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4">
            <Image
              src={"/images/googlescripts.png"}
              alt="svg logo"
              width={200}
              height={200}
              className="h-16 w-16"
            />
            <p className="font-bold text-2xl tracking-tighter">
              Google Scripts
            </p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Manage email automations, google sheets manipulation with google
              apps scripts
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4">
            <Image
              src={"/images/wordpress.png"}
              alt="svg logo"
              width={200}
              height={200}
              className="h-16 w-16"
            />
            <p className="font-bold text-2xl tracking-tighter">Wordpress</p>

            <p className="max-w-[180px] text-center text-gray-600 text-base font-semibold tracking-wide">
              Build custom plugins using gutenberg blocks and create beautiful
              templates.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
