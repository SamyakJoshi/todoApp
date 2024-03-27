import React, { useState, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { type BaseSnackbarProps, snackbarVariants } from './cva';
// import { cva } from 'class-variance-authority';

// const snackbarVariants = cva({
//   position: ['top', 'bottom'],
//   type: ['info', 'success', 'warning', 'error'],
// });
interface SnackbarProps extends BaseSnackbarProps, PropsWithChildren {}

function Snackbar({
  children,
  position = 'bottom',
  type = 'info',
  // duration = 5000,
}: SnackbarProps) {
  const [snackbarItem, setSnackbarItem] = useState([
    children,
    children,
    children,
    children,
  ]);

  // const [isActive, setIsActive] = useState(false);

  // const showSnackbar = () => {
  //   setIsActive(true);
  // };
  // const hideSnackbar = () => {
  //   setIsActive(false);
  // };

  // setTimeout(hideSnackbar, duration);

  const sn = snackbarItem.map((item, index) => {
    const snackbarClasses = snackbarVariants({ position, type });
    const bottomvalue = index * 10;

    return (
      <div
        className={twMerge(snackbarClasses, ` bottom-[${bottomvalue}px] `)}
        key={index}
      >
        {item}
      </div>
    );
  });

  return <div className="fixed">{sn}</div>;
}

export default Snackbar;
