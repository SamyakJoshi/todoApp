'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Error page
 * @returns JSX.Element
 */
export default function Error():JSX.Element {
  return (
    <div className="w-screen h-screen flex ">
      <div className="m-auto w-1/2 h-1/2 relative ">
        <Image src="/assets/billa.png" alt="Error" fill />
      </div>
    </div>
  );
}
