import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Sizes } from "../../types";

export interface ICheckBoxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    checkBoxSize?: Sizes,
    error?: boolean,
    label?: string
}