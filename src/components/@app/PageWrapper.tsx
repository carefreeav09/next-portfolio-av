'use client';
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {usePathname} from 'next/navigation';

const PageWrapper = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      className='flex-1 relative'
      initial={{
        opacity: 0,
        y: '-100%',
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
        bounce: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
