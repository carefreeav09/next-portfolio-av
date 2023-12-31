'use client';
import '../globals.css';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
// import router from "next/navigation";
import {MdHomeFilled, MdOutlineDashboard} from 'react-icons/md';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const router = useRouter();

  return (
    <html lang='en'>
      <head>
        <title>Carefreeav</title>
      </head>

      <body>
        <div className='flex items-stretch justify-start min-h-screen h-full'>
          <nav className='flex-[0.1] bg-gray-900 text-white flex items-between flex-col justify-between'>
            <section>
              <Image
                priority
                src={'/images/pp.jpeg'}
                alt='profile-picture'
                width='1920'
                height={'1080'}
                className='w-full h-30'
              />

              <p className='bg-indigo-700 w-full text-center font-bold p-2 shadow-md shadow-indigo-900'>
                Aabhushan
              </p>

              <div className='mt-10 flex flex-col gap-10'>
                <div
                  className='flex items-center justify-center flex-col cursor-pointer'
                  onClick={() => {
                    router.push('/main');
                  }}
                >
                  <motion.div
                    whileHover={{scale: 1.5}}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    <MdHomeFilled style={iconStyles} />
                  </motion.div>

                  <p>Home</p>
                </div>
              </div>

              <div className='mt-10 flex flex-col gap-10'>
                <div
                  className='flex items-center justify-center flex-col cursor-pointer'
                  onClick={() => {
                    router.push('/dashboard/projects');
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

                  <p>Dashboard</p>
                </div>
              </div>

              <div className='mt-10 flex flex-col gap-10'>
                <div
                  className='flex items-center justify-center flex-col cursor-pointer'
                  onClick={() => {
                    router.push('/dashboard/projects');
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

                  <p>Projects</p>
                </div>
              </div>
            </section>

            <footer className='bg-gray-800 text-white p-2 text-center mt-4'>
              <p>1.0.0</p>
            </footer>
          </nav>
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}

const iconStyles = {
  fontSize: '2rem',
  marginBottom: '0.1rem',
};
