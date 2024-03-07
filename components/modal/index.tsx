/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { PropsWithChildren, ReactNode } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import { BaseModalProps, baseModal } from './modalCva';
import ModalBackdrop from '../backdrop';
import { BaseBackdropProps } from '../backdrop/backdropCva';

interface IModalProps extends BaseModalProps, PropsWithChildren {
  isOpen: boolean;
  onClose?: VoidFunction;
  backdropProps?: BaseBackdropProps;
  className?: ClassNameValue;
}

/**
 * Modal component props
 * @param {IModalProps} props - Component props
 * @return {ReactNode | null} - Rendered component
 */
function Modal(props: IModalProps): ReactNode | null {
  const { isOpen, onClose, children, backdropProps, className, ...rest } = props;

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClose={onClose} {...backdropProps}>
      <div
        role="dialog"
        className={twMerge(baseModal(rest), className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </ModalBackdrop>
  );
}

export default Modal;
