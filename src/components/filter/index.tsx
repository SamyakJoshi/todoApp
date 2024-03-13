'use client';

import React from 'react';
import Image from 'next/image';

const Filter = () => {
  const handleClick = () => {
    console.log('filter');
  };

  return (
    <div onClick={handleClick} className="mr-5 flex items-center px-3 py-1 text-gray-700" role="button">
      <Image src="/assets/filter.svg" alt="filter" width={20} height={20} />
      <span className="ml-2 text-gray-400 text-sm">Quick Filters</span>
    </div>
  );
};

export default Filter;
