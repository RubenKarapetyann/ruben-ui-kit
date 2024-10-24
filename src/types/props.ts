import { ReactElement } from "react"

export type ReactCodedElement = ReactElement & {
    type: {
        displayCode?: string
    }
}
