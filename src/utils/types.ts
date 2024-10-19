import { PropsWithChildren, ReactElement } from "react";

type ReactCodedElement = ReactElement & {
    type: {
        displayCode?: string
    }
}

export interface RunThroughAllChildrenProps extends PropsWithChildren {
    handle: (child: ReactCodedElement) => ReactCodedElement
}