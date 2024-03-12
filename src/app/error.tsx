'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Error page
 * @param param0
 * @return {JSX.Element}
 */
export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="w-screen h-screen flex ">
      <div className="m-auto w-1/2 h-1/2 relative ">
        <Image src="/assets/billa.png" alt="Error image" fill />
      </div>
    </div>
  );
}
