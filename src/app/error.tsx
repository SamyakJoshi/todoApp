'use client';

import Image from 'next/image';

function Error({ error }: { error: Error & { digest?: string } }): JSX.Element {
  console.error(error);

  return (
    <div className="w-screen h-screen flex ">
      <div className="m-auto w-1/2 h-1/2 relative ">
        <Image src="/assets/billa.png" alt="Error" fill />
      </div>
    </div>
  );
}

export default Error;
