'use client';

import React from 'react';
import {Bars} from 'react-loader-spinner';
const loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Bars
        height='80'
        width='80'
        color='#4338ca'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default loading;
