import { PropsWithChildren } from "react";

import { BaseBackDropProps, backDrop } from "./modalBackDropVariant";

interface ModalBackDropProps extends BaseBackDropProps, PropsWithChildren {
  onClose?:VoidFunction
}

function ModalBackDrop({children ,onClose,...rest}:ModalBackDropProps ) {
  return (
    <div className={backDrop(rest)} onClick={onClose}>
    {children}
    </div>
  );
}

export default ModalBackDrop;
