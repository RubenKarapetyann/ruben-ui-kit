import { HTMLAttributes } from "react";

export interface ITabProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean
}