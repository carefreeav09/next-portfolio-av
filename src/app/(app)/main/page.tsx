'use client';
import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import PageWrapper from '@/components/@app/PageWrapper';
import {useRouter} from 'next/navigation';

type Role = string;

const ROLES_LIST = [
  'Full Stack Developer',
  'React Native Developer',
  'Chelsea FC fan',
  'Video Gamer',
];

const MainPageContent = () => {
  const navigate = useRouter();
  //
  const [roles, setRoles] = useState<Role>('Full Stack Developer');
  const [count, setCount] = useState(0);

  //
  useEffect(() => {
    const interval = setInterval(() => {
      setRoles((prevRole) => {
        const currentIndex = ROLES_LIST.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % ROLES_LIST.length;
        return ROLES_LIST[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div className='flex items-center justify-center min-h-screen text-center w-full flex-col'>
        <p className='text-2xl text-gray-400 mb-4'>
          <button
            onClick={() => {
              setCount((prevCount) => prevCount + 1);
            }}
          >
            Hi
          </button>
          , I am
        </p>
        <p className='text-5xl font-bold mb-4'>Aabhushan Gautam</p>
        <p className='text-2xl text-gray-400'>
          I am a{' '}
          <AnimatePresence mode='wait'>
            <motion.span
              key={roles}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.5}}
            >
              <strong>{roles}</strong>
            </motion.span>
          </AnimatePresence>
        </p>

        {count > 5 && (
          <p
            className='text-xl text-blue-200 my-5'
            onClick={() => {
              navigate.push('/login');
            }}
          >
            Login
          </p>
        )}
      </div>
      {/* </div> */}
    </PageWrapper>
  );
};

export default MainPageContent;
