import React from 'react';
import {getServerSession} from 'next-auth';
import SignUpButton from '@/app/(auth)/login/@form';

const AdminPage = async () => {
  const session = await getServerSession();
  return (
    <div>
      This is admin dashboard
      <SignUpButton
        session={session}
        title={session && session.user ? 'Sign out' : 'Sign In'}
      />
    </div>
  );
};

export default AdminPage;
