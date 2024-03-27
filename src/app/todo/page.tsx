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

      <Snackbar position="bottomLeft" type="success">
        <div>This is a custom snackbar!</div>
      </Snackbar>
    </>
  );
}
export default Demo;
