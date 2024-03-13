import React, { type PropsWithChildren, type ReactNode } from 'react';
import { twMerge, type ClassNameValue } from 'tailwind-merge';
import { type BaseBackdropProps, backdrop } from './cva';

interface ModalBackdropProps extends BaseBackdropProps, PropsWithChildren {
  onClose?: VoidFunction;
  className?: ClassNameValue;
}

function ModalBackdrop(props: ModalBackdropProps): ReactNode {
  const { children, onClose, className, ...rest } = props;

  return (
    <div
      className={twMerge(backdrop(rest), className)}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && onClose) onClose();
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default ModalBackdrop;
