import { getServerSession } from "next-auth";

import React from "react";

import SignUpButton from "./@form";

const Login = async (props: any) => {
  const session = await getServerSession();
  return (
    <div
      // too lazy to convert this to tailwind class. funny story
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        overflow: "none",
      }}
    >
      <SignUpButton
        session={session}
        title={session && session.user ? "Sign out" : "Sign In"}
      />
    </div>
  );
};

export default Login;
