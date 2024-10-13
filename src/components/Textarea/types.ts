import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { ITextFieldProps } from "../TextField/types";

export type ITextareaProps =
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
    & ITextFieldProps
