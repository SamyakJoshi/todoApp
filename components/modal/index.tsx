import { PropsWithChildren, ReactNode } from 'react';
import { BaseModalProps, baseModal } from './modalVariant';
import ModalBackdrop from './backdrop';
import { BaseBackdropProps } from './backdrop/backdropVariant';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface IModalProps extends BaseModalProps, PropsWithChildren {
  isOpen: boolean;
  onClose?: VoidFunction;
  backdropProps?: BaseBackdropProps;
  className?: ClassNameValue;
}

/**
 * Modal component props
 * @param {IModalProps} props - Component props
 * @returns {ReactNode | null} - Rendered component
 */
function Modal(props: IModalProps): ReactNode | null {
  const { isOpen, onClose, children, backdropProps, className, ...rest } = props;

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClose={onClose} {...backdropProps}>
      <div className={twMerge(className, baseModal(rest))} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </ModalBackdrop>
  );
}

export default Modal;
