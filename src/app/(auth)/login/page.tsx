import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React from "react";

import { authOptions } from "../../api/auth/[...nextauth]/route";

const Login = async (props: any) => {
  const session = await getServerSession(authOptions);

  console.log(session, "session");
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </>
  );
};

export default Login;
