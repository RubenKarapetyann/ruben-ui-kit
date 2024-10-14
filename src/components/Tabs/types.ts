import { HTMLAttributes } from "react";
import { DivProps } from "../Table/types";

export interface ITabProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

export type IContentProps = DivProps
