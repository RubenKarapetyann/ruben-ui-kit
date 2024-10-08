import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { Sizes } from "../../types";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    error?: null | string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    inputSize?: Sizes
}