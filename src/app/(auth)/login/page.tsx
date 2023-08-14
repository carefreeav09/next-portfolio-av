import { getServerSession } from "next-auth";

import React from "react";

import SignUpButton from "./@form";

const Login = async (props: any) => {
  const session = await getServerSession();
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col gap-8">
      <SignUpButton
        session={session}
        title={session && session.user ? "Sign out" : "Sign In"}
      />

      {session && session.user && (
        <div className="flex flex-col gap-4">
          You are logged in as{" "}
          {session && session.user ? session.user.email : "guest"}
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <a href="/dashboard">Go to Dashboard</a>
          </button>
        </div>
      )}

      {!session && (
        <div className="flex flex-col gap-4">
          You cannot access past these page
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <a href="/main">Go to app</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
