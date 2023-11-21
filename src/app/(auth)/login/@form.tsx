'use client';
import React from 'react';
import {signIn, signOut} from 'next-auth/react';

const SignUpButton = ({session, title}: {session: any; title: string}) => {
  return (
    <button
      onClick={() =>
        session
          ? signOut({
              callbackUrl: 'http://localhost:3000',
            })
          : signIn()
      }
      className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
    >
      {title}
    </button>
  );
};

export default SignUpButton;
