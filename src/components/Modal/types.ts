import { PropsWithChildren } from "react";
import { IButtonProps } from "../Button/types";

export interface IModalProps extends PropsWithChildren {
    onClose?: () => void,
    isOpen: boolean,
    closeIfClickedOutside?: boolean,
}

export interface ICloseButtonProps extends IButtonProps {
    onClose?: () => void
}