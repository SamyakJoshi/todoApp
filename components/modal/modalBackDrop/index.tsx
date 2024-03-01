import { PropsWithChildren, ReactNode } from "react";
import { BaseBackdropProps, backDrop } from "./modalBackDropVariant";

interface IModalBackdropProps extends BaseBackdropProps, PropsWithChildren {
  onClose?: VoidFunction;
}

/**
 * ModalBackdrop component props
 * @param {IModalBackdropProps} props - Component props
 * @returns {ReactNode} - Rendered component
 */
function ModalBackdrop({
  children,
  onClose,
  ...rest
}: IModalBackdropProps): ReactNode {
  return (
    <div className={backDrop(rest)} onClick={onClose}>
      {children}
    </div>
  );
}

export default ModalBackdrop;
