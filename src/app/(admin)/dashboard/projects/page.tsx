import React, {useEffect} from 'react';
import ProjectsListComponent from './component';
import {getServerSession} from 'next-auth';
import {useRouter} from 'next/router';
import SignUpButton from '@/app/(auth)/login/@form';

const page = async () => {
  const data = await getProjectsData();
  const session = await getServerSession();

  console.log(session, 'session');

  if (!session || session?.user?.email !== 'carefreeav09@gmail.com') {
    return (
      <div>
        You cannot access this page.
        <SignUpButton
          session={session}
          title={session && session.user ? 'Sign out' : 'Sign In'}
        />
      </div>
    );
  } else {
    return <ProjectsListComponent projects={data} />;
  }
};

export default page;

async function getProjectsData() {
  const res = await fetch(process.env.API_URL + '/api/v1/projects', {
    next: {
      revalidate: 1, // in minutes
    },
  });

  const resObject = await res.json();
  return resObject.data;
}

// this component is redundant to the one at the app/ directory. fix it .
