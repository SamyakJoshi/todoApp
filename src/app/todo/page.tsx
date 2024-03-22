'use client';
import Snackbar from '@/components/snackbar/component';
import React from 'react';

function Demo() {
  const handleClick = () => {
    // showSnackbar(); // Assuming you have a way to trigger the snackbar
  };

  return (
    <>
      <button onClick={handleClick}>Show Snackbar</button>
      <Snackbar position="bottom" type="success">
        This is a custom snackbar!
      </Snackbar>
    </>
  );
}
export default Demo;
