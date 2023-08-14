"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

const SignUpButton = ({ session, title }: { session: any; title: string }) => {
  return (
    <button
      onClick={() => (session ? signOut() : signIn())}
      style={{
        padding: "16px 24px",
        borderRadius: 8,
        background: "#4f46e5",
        color: "white",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
};

export default SignUpButton;
