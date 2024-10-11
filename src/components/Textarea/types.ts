import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from "react";
import { Sizes } from "../../types";

export interface ITextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    error?: null | string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    inputSize?: Sizes
}