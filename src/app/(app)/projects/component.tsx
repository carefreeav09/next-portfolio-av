'use client';
import PageWrapper from '@/components/@app/PageWrapper';
import classNames from 'classnames';
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import {Gi3DGlasses} from 'react-icons/gi';

import Image from 'next/image';
import {IProject} from '../../../types/projects.types';

//
import {TfiWorld} from 'react-icons/tfi';

const ProjectsComponent = ({projects}: {projects: IProject[]}) => {
  //
  const [activeTab, setActiveTab] = React.useState('all');
  const [selectedId, setSelectedId] = React.useState<number | null>(null);

  //
  const getCurrentSelectedProject = () => {
    if (!selectedId) return null;

    return projects.find((p) => p._id === selectedId);
  };

  const selectedProject = getCurrentSelectedProject();

  return (
    <PageWrapper>
      <div
        className={classNames(
          `min-h-screen h-full w-full py-12 xl:px-40 lg:px-24 md:px-20 px-16 relative`,
          selectedId ? 'opacity-40' : 'opacity-100'
        )}
        onClick={() => {
          selectedId && setSelectedId(null);
        }}
      >
        <div className='flex justify-center items-center h-[150px] flex-col gap-4 text-4xl'>
          <Gi3DGlasses />
          <p className='text-5xl font-bold tracking-tighter'> portfolio </p>
        </div>

        <nav className='flex justify-center items-center gap-4'>
          <div
            className='tracking-tighter font-bold text-sm cursor-pointer hover:underline '
            onClick={() => {
              setActiveTab('all');
            }}
          >
            ALL
          </div>

          <div
            className='tracking-tighter font-bold text-sm cursor-pointer hover:underline uppercase'
            onClick={() => {
              setActiveTab('webapp');
            }}
          >
            Web
          </div>

          <div
            className='tracking-tighter font-bold text-sm cursor-pointer hover:underline uppercase'
            onClick={() => {
              setActiveTab('mobile');
            }}
          >
            Mobile
          </div>
        </nav>

        <div className='mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          <AnimatePresence mode={'sync'}>
            {projects && projects.length > 0 ? (
              projects
                .filter((p) => p.appType === activeTab || activeTab === 'all')
                .map((p) => (
                  <motion.div
                    layout='preserve-aspect'
                    layoutId={p?._id?.toString()}
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    // exit={{ scale: 0.8, opacity: 0 }}
                    transition={{type: 'spring'}}
                    key={p._id}
                    // className='flex flex-col justify-between items-start gap-4 bg-gray-900 rounded-lg shadow-lg text-clip overflow-hidden break-words'
                    onClick={() => setSelectedId(p._id)}
                    whileHover={{
                      translateY: -10,
                      boxShadow: '#111827 0px 7px 20px 0px',
                    }}
                    className='shadow shadow-white rounded-lg'
                    whileInView={{
                      boxShadow: '#111827 0px 3px 10px 0px',
                    }}
                  >
                    <div className='h-60 w-full overflow-hidden'>
                      <Image
                        src={p.thumbnail}
                        width={800}
                        height={800}
                        alt={`${p.name} alt`}
                        className='h-[inherit] w-[inherit] object-contain scale-100 hover:transition-transform hover:scale-110 duration-1000 ease-in-out object-center'
                      />
                    </div>
                    <div className='p-4 flex flex-col gap-4 '>
                      <div className='flex flex-col justify-start items-start gap-2'>
                        <p className='text-xl font-bold tracking-tighter'>
                          {p.name}
                        </p>
                        <p className='text-sm tracking-tighter text-gray-400 '>
                          {p.description.length > 20
                            ? `${p.description
                                .split(' ')
                                .slice(0, 16)
                                .join(' ')} ...`
                            : p.description}
                        </p>
                      </div>

                      <div className='grid grid-cols-3 gap-2 break-words'>
                        {p?.technologies?.slice(0, 3).map((t) => {
                          return (
                            <div
                              key={t}
                              className='px-2 py-1 bg-gray-800 rounded-lg text-sm font-bold tracking-tighter gap-2 capitalize'
                            >
                              {t}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))
            ) : (
              <div className='col-span-4 text-center'>
                No projects are added yet!
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode={'sync'}>
        {projects && selectedId && (
          <motion.div
            layout='preserve-aspect'
            layoutId={selectedId.toString()}
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{type: 'spring'}}
            key={selectedId}
            className={classNames(
              'absolute top-[10%] rounded-lg shadow-lg',
              getCurrentSelectedProject()?.appType === 'webapp'
                ? 'xl:w-1/2 xl:left-[25%] left-0 w-full'
                : 'xl:w-1/3 xl:left-[35%] left-0 w-full'
            )}
          >
            <div className='flex flex-col justify-start items-start gap-4 bg-gray-900'>
              <Image
                src={getCurrentSelectedProject()?.thumbnail ?? ''}
                width={1800}
                height={1800}
                alt={`alt`}
                className={classNames(
                  'object-cover',
                  getCurrentSelectedProject()?.appType === 'webapp'
                    ? 'w-full max-h-[400px]'
                    : 'w-full m-auto max-h-[500px]'
                )}
              />
              <div className='p-6 flex flex-col gap-4'>
                <div className='grid grid-cols-5 justify-start items-center gap-2'>
                  {selectedProject?.technologies?.map((t: string) => {
                    return (
                      <div
                        key={t}
                        className='px-2 py-1 bg-gray-800 rounded-lg text-sm font-bold tracking-tighter gap-2 capitalize'
                      >
                        {t}
                      </div>
                    );
                  })}
                </div>

                <div className='flex flex-col justify-start items-start gap-2'>
                  <p className='text-xl font-bold tracking-tighter'>
                    {selectedProject?.name}
                  </p>
                  <p className='text-sm font-bold tracking-tighter text-gray-400'>
                    {selectedProject?.description}
                  </p>

                  <p className='text-lg font-bold flex gap-2 items-center underline cursor-pointer text-blue-200'>
                    <TfiWorld />
                    <a href={selectedProject?.url}>{selectedProject?.url}</a>
                  </p>
                </div>

                <p className='text-lg font-bold'>Images</p>

                <div>
                  {selectedProject?.images?.map((img) => {
                    return (
                      <div key={img} className='w-full h-[400px] mb-6'>
                        <Image
                          src={img}
                          width={1800}
                          height={1800}
                          alt={`alt`}
                          className='object-cover h-full w-full'
                        />
                      </div>
                    );
                  })}

                  {selectedProject?.thumbnail && (
                    <div className='w-full h-[400px]'>
                      <Image
                        src={selectedProject?.thumbnail}
                        width={1800}
                        height={1800}
                        alt={`alt`}
                        className='object-cover h-full w-full'
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default ProjectsComponent;
