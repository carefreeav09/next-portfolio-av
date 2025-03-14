'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import React, {Suspense} from 'react';
import {BsPostcard} from 'react-icons/bs';
import {
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlinePhone,
} from 'react-icons/hi';
import {MdOutlineDashboard} from 'react-icons/md';
import {NavigationEvents} from '../(app)/layout';

const iconStyles = {
  fontSize: '2rem',
  marginBottom: '0.1rem',
};

const BackupPage = ({children}: {children: React.ReactNode}) => {
  const router = useRouter();
  return (
    <div>
      <div className='flex items-stretch justify-start min-h-screen h-full'>
        <nav className='flex-[0.1] min-w-[10%] h-screen text-white flex items-center flex-col justify-center fixed left-0 top-0 z-50'>
          <section className='items-center justify-center flex flex-col'>
            <motion.div
              whileHover={{scale: 1.5}}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => {
                router.push('/main');
              }}
              className='flex items-center justify-center'
            >
              <Image
                priority
                src={'/images/pp.jpeg'}
                alt='profile-picture'
                width='1920'
                height={'1080'}
                className='h-12 w-auto rounded-full'
              />
            </motion.div>

            <div className='mt-10 flex flex-col gap-10'>
              <div
                className='flex items-center justify-center flex-col cursor-pointer'
                onClick={() => {
                  router.push('/about');
                }}
              >
                <motion.div
                  whileHover={{scale: 1.5}}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <HiOutlineUser style={iconStyles} />
                </motion.div>
              </div>

              <div
                className='flex items-center justify-center flex-col cursor-pointer'
                onClick={() => {
                  router.push('/resume');
                }}
              >
                <motion.div
                  whileHover={{scale: 1.5}}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <HiOutlineDocumentText style={iconStyles} />
                </motion.div>
              </div>

              <div
                className='flex items-center justify-center flex-col cursor-pointer'
                onClick={() => {
                  router.push('/projects');
                }}
              >
                <motion.div
                  whileHover={{scale: 1.5}}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <MdOutlineDashboard style={iconStyles} />
                </motion.div>
              </div>

              <div
                className='flex items-center justify-center flex-col cursor-pointer'
                onClick={() => {
                  router.push('/blog');
                }}
              >
                <motion.div
                  whileHover={{scale: 1.5}}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <BsPostcard style={iconStyles} />
                </motion.div>
              </div>

              <div
                className='flex items-center justify-center flex-col cursor-pointer'
                onClick={() => {
                  router.push('/contact');
                }}
              >
                <motion.div
                  whileHover={{scale: 1.5}}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <HiOutlinePhone style={iconStyles} />
                </motion.div>
              </div>
            </div>
          </section>
        </nav>

        <Suspense>
          <NavigationEvents />
          <main className='flex-1 ml-[10%] px-2 z-40'>{children}</main>
        </Suspense>
      </div>
    </div>
  );
};

export default BackupPage;
