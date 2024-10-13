import { PropsWithChildren, ReactNode } from "react";
import { Sizes } from "../../types";

export interface ITextFieldProps extends PropsWithChildren {
    error?: null | string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    inputSize?: Sizes,
    label?: string
}