import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ITextFieldProps } from "../TextField/types";

export type IInputProps =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & ITextFieldProps
