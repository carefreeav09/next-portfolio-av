'use client';

import {Button} from '@/components/@resuable';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col gap-8'>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()} className='block '>
        Try again
      </Button>

      <Button onClick={() => history.back()}>Go back</Button>
    </div>
  );
}
