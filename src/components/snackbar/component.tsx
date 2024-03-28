import React, {
  useState,
  type PropsWithChildren,
  useEffect,
  ReactNode,
} from 'react';
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
  const [snackbarItem, setSnackbarItem] = useState<ReactNode[]>([]);

  // const [isActive, setIsActive] = useState(false);

  // const showSnackbar = () => {
  //   setIsActive(true);
  // };
  // const hideSnackbar = () => {
  //   setIsActive(false);
  // };

  // setTimeout(hideSnackbar, duration);

  useEffect(() => {
    setInterval(() => {
      console.log('snackbar');
      setSnackbarItem([...snackbarItem, children]);
    }, 3000);
  });

  const sn = snackbarItem.map((item, index) => {
    const snackbarClasses = snackbarVariants({ position, type });
    // const bottomvalue = `bottom-[${index * 10}px]`;

    return (
      <div
        className={twMerge(snackbarClasses)}
        key={index}
        style={{ bottom: `${index * 40}px` }}
      >
        {item}
      </div>
    );
  });

  return <div className="fixed">{sn}</div>;
}

export default Snackbar;
