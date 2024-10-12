import { PropsWithChildren } from "react";
import { IButtonProps } from "../Button/types";

export interface IPopoverProps extends PropsWithChildren {
    isOpen: boolean,
    onToggle?: () => void,
}

export interface IPopoverButtonProps extends IButtonProps {
    onToggle?: () => void
}