import React, { PropsWithChildren, useState } from 'react';
import { BaseSnackbarProps, snackbarVariants } from './cva';
import { twMerge } from 'tailwind-merge';
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
  const [isActive, setIsActive] = useState(false);

  const showSnackbar = () => {
    setIsActive(true);
  };
  const hideSnackbar = () => {
    setIsActive(false);
  };

  // setTimeout(hideSnackbar, duration);
  const snackbarClasses = snackbarVariants({ position, type });

  return <div className={snackbarClasses}>{children}</div>;
}

export default Snackbar;
