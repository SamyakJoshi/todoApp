import { PropsWithChildren, ReactNode } from "react";
import { BaseBackdropProps } from "./modalBackDrop/modalBackDropVariant";
import { BaseModalProps, baseModal } from "./modalBackDropVariant";
import ModalBackdrop from "./modalBackDrop";

interface IModalProps extends BaseModalProps, PropsWithChildren {
  isOpen: boolean;
  onClose?: VoidFunction;
  backdropProps?: BaseBackdropProps;
}

/**
 * Modal component props
 * @param {IModalProps} props - Component props
 * @returns {ReactNode | null} - Rendered component
 */
function Modal(props: IModalProps): ReactNode | null {
  const { isOpen, onClose, children, backdropProps, ...rest } = props;

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClose={onClose} {...backdropProps}>
      <div className={baseModal(rest)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </ModalBackdrop>
  );
}

export default Modal;
