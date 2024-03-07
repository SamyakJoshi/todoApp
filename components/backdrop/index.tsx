import React, { PropsWithChildren, ReactNode } from 'react';
import { twMerge, ClassNameValue } from 'tailwind-merge';
import { BaseBackdropProps, backdrop } from './backdropCva';

interface IModalBackdropProps extends BaseBackdropProps, PropsWithChildren {
  onClose?: VoidFunction;
  className?: ClassNameValue;
}

/**
 * ModalBackdrop component props
 * @param {IModalBackdropProps} props - Component props
 * @return {ReactNode} - Rendered component
 */
function ModalBackdrop(props: IModalBackdropProps): ReactNode {
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
