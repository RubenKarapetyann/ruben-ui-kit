import { PropsWithChildren } from "react";

export interface RunThroughAllChildrenProps extends PropsWithChildren {
    handle: (child: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>) => React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
}