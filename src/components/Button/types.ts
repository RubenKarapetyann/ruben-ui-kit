import { HTMLAttributes, ReactNode } from "react";
import { Colors, Sizes } from "../../types";

type ButtonTypes = "primary" | "secondary" | "outlined"

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonTypes,
    size?: Sizes,
    color?: Colors,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode
}