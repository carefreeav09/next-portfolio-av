"use client";
import React from "react";
import GoogleMapReact from "google-map-react";
import { motion } from "framer-motion";

//
import PageWrapper from "@/components/@app/PageWrapper";

//
import { HiLocationMarker, HiPhoneIncoming, HiMail } from "react-icons/hi";
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";

const Contact = () => {
  //
  const defaultProps = {
    center: {
      lat: 27.741333,
      lng: 85.344622,
    },
    zoom: 11,
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

  return (
    <PageWrapper>
      <div className="h-screen w-10/12 flex justify-between items-center gap-10 m-auto md:flex-col xl:flex-row">
        <div className="">
          <p className="text-xl tracking-tight text-gray-500 mb-0">
            have an idea in mind?
          </p>

          <p className="text-4xl tracking-tighter mb-10"> Send me a message</p>

          <form className="">
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="tracking-tighter text-sm text-gray-500"
                >
                  email
                </label>
                <input
                  type="text"
                  className="w-full  px-2 py-2 rounded-md outline-none bg-slate-600 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="tracking-tighter text-sm text-gray-500"
                >
                  subject
                </label>
                <input
                  type="text"
                  className="w-full  px-2 py-2 rounded-md outline-none  bg-slate-600 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="tracking-tighter text-sm text-gray-500"
                >
                  message
                </label>

                <textarea
                  className="w-full  px-2 py-2 rounded-md outline-none bg-slate-600 text-white"
                  rows={2}
                />
              </div>
              <button
                type="submit"
                className="p-4 bg-indigo-800 text-white rounded-lg hover:bg-indigo-600 font-bold shadow-md shadow-indigo-600"
              >
                Lets connect
              </button>
            </div>
          </form>
        </div>

        <div className="justify-self-end flex-1">
          <div style={{ height: "300px", width: "100%", borderRadius: "8px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: apiKey,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <HiLocationMarker lat={27.741333} lng={85.344622} />
            </GoogleMapReact>
          </div>

          <div className="grid grid-cols-2 my-8 text-center gap-4">
            <div className="w-full rounded-md p-4 flex items-center gap-4 bg-gray-900 justify-center">
              <div className="text-red-400 text-2xl">
                <HiPhoneIncoming />
              </div>
              <div className=" text-white">
                <div className="text-white text-2xl">
                  <div>+977 9861551591</div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-md p-4 flex items-center gap-4 bg-gray-900 justify-center">
              <div className="text-red-400 text-2xl">
                <HiMail />
              </div>
              <div className="text-left text-white">
                <p className="text-white text-2xl">carefreeav09@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
            <motion.div
              className="text-blue-400 text-3xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
            >
              <BsFacebook />
            </motion.div>

            <motion.div
              className="text-white-400 text-3xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
            >
              <BsGithub />
            </motion.div>

            <motion.div
              className="text-blue-400 text-3xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
            >
              <BsLinkedin />
            </motion.div>

            <motion.div
              className="text-white-400 text-3xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
            >
              <BsDiscord />
            </motion.div>

            <motion.div
              className="text-blue-400 text-3xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
            >
              <BsTwitter />
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
