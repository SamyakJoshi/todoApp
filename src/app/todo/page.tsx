'use client';
import React from 'react';
import Snackbar from './Snackbar';
import MyComponent from '@/components/demo/demo';

function Demo() {
  // const handleClick = () => {
  //   showSnackbar(); // Assuming you have a way to trigger the snackbar
  // };

  return (
    <>
      <MyComponent />
      {/* <button onClick={handleClick}>Show Snackbar</button>
      <Snackbar position="top" type="success">
        This is a custom snackbar!
      </Snackbar> */}
    </>
  );
}
export default Demo;
