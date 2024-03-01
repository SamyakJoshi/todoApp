import { PropsWithChildren, ReactNode } from 'react';
import { BaseBackdropProps, backdrop } from './backdropVariant';
import { twMerge, ClassNameValue } from 'tailwind-merge';

interface IModalBackdropProps extends BaseBackdropProps, PropsWithChildren {
  onClose?: VoidFunction;
  className?: ClassNameValue;
}

/**
 * ModalBackdrop component props
 * @param {IModalBackdropProps} props - Component props
 * @returns {ReactNode} - Rendered component
 */
function ModalBackdrop(props: IModalBackdropProps): ReactNode {
  const { children, onClose, className, ...rest } = props;

  return (
    <div className={twMerge(className, backdrop(rest))} onClick={onClose}>
      {children}
    </div>
  );
}

export default ModalBackdrop;
