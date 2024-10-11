import { PropsWithChildren } from "react";

export interface IModalProps extends PropsWithChildren {
    onClose?: () => void,
    isOpen: boolean,
    closeIfClickedOutside?: boolean,
}

export interface ICloseButtonProps extends PropsWithChildren {
    onClose?: () => void
}