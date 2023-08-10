import PageWrapper from "@/components/@app/PageWrapper";
import React from "react";

const Contact = ({ data }: { data: any }) => {
  //
  console.log(data, "data");
  return (
    <PageWrapper>
      <div className="h-screen w-10/12 flex justify-between items-center gap-10 m-auto">
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

        <div className="justify-self-end">looking for google maps API lol</div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.API_URL + "/projects");
  const data = await res.json();

  console.log(res, data, process.env.API_URL, "data in server");

  // Pass data to the page via props
  return { props: { data } };
}
