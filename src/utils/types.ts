import { PropsWithChildren } from "react";
import { ReactCodedElement } from "../types";

export interface RunThroughAllChildrenProps extends PropsWithChildren {
    handle: (child: ReactCodedElement) => ReactCodedElement
}