import React, { useState } from 'react';
import { createVariants } from 'class-variance-authority';

const snackbarVariants = createVariants({
  position: ['top', 'bottom'],
  type: ['info', 'success', 'warning', 'error'],
});

function Snackbar({ children, position = 'bottom', type = 'info', duration = 5000 }) {
  const [isActive, setIsActive] = useState(false);

  const showSnackbar = () => { setIsActive(true); };
  const hideSnackbar = () => { setIsActive(false); };

  setTimeout(hideSnackbar, duration);
  const snackbarClasses = snackbarVariants({ position, type });

  return (
    
    <div className={snackbarClasses}>
      {children}
    </div>
  );
}

export default Snackbar;
