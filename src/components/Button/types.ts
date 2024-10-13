import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { Colors, Sizes } from "../../types";

type ButtonTypes = "primary" | "secondary" | "outlined"
type ButtonForms = "square" | "rounded" | "smooth"

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonTypes,
    size?: Sizes,
    color?: Colors,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    form?: ButtonForms,
    shadows?: boolean
}