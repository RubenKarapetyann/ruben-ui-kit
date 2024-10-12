import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { Colors, Sizes } from "../../types";

type ButtonTypes = "primary" | "secondary" | "outlined"

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonTypes,
    size?: Sizes,
    color?: Colors,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode
}