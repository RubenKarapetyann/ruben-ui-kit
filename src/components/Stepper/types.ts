import { HTMLAttributes } from "react";

type Status = "success" | "progress" | "reject"

export interface IStepProps extends HTMLAttributes<HTMLDivElement> {
    status: Status,
    label?: string
}