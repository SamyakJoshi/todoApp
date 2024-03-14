/* eslint jsx-a11y/no-noninteractive-element-interactions: off -- This is Required for Modal as we need to cancel the backdrop propogation event */
/* eslint jsx-a11y/click-events-have-key-events: off -- This is Required for Modal as we need to cancel the backdrop propogation event */

import React, { type PropsWithChildren, type ReactNode } from 'react';
import { type ClassNameValue, twMerge } from 'tailwind-merge';
import ModalBackdrop, { type BaseBackdropProps } from '@/components/backdrop';
import { type BaseModalProps, baseModal } from './cva';

interface ModalProps extends BaseModalProps, PropsWithChildren {
  isOpen: boolean;
  onClose?: VoidFunction;
  backdropProps?: BaseBackdropProps;
  className?: ClassNameValue;
}

/**
 * Modal component props
 * @param props - Component props
 * @returns Rendered component
 */
function Modal(props: ModalProps): ReactNode | null {
  const { isOpen, onClose, children, backdropProps, className, ...rest } =
    props;

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClose={onClose} {...backdropProps}>
      <div
        role="dialog"
        className={twMerge(baseModal(rest), className)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </ModalBackdrop>
  );
}

export default Modal;
