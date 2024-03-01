import { PropsWithChildren } from "react";

import { BaseBackDropProps } from "./modalBackDrop/modalBackDropVariant";
import { BaseModalProps, baseModal } from "./modalBackDropVariant";

import ModalBackDrop from "./modalBackDrop";

interface IModalOption extends BaseModalProps, PropsWithChildren{
  isOpen: boolean;
  onClose?: VoidFunction;
  backdropProps?: BaseBackDropProps,
}

function Modal({
  isOpen,
  onClose,
  children,
  backdropProps,
  ...rest
}: IModalOption) {

  if (!isOpen) return null;

  return (
      <ModalBackDrop {...backdropProps} onClose={onClose}>
      <div className={baseModal(rest)} onClick={(e)=>e.stopPropagation()}>
        {children}
      </div>
      </ModalBackDrop>
  );
}

export default Modal;
