import { Children, cloneElement, isValidElement, PropsWithChildren, ReactNode, useState } from "react"
import styles from "./Tabs.module.scss"
import { ITabProps } from "./types"

const Tabs = ({ children }: PropsWithChildren) => {
    const [index, setIndex] = useState(0)

    const tabs: ReactNode[] = []
    const contents: ReactNode[] = []

    Children.forEach(children, child => {
        if (isValidElement(child) && typeof child.type !== "string") {
            const typedChild = child as any
            const type = typedChild.type.displayCode as string
            if (type === "tab") {                                
                const tab = tabs.length // index
                tabs.push(cloneElement(
                    typedChild, {
                        onClick: () => setIndex(tab),
                        key: tab,
                        active: index === tab
                    }))
            } else if (type === "content") {
                contents.push(typedChild)
            }
        }
    })

    return (
        <>
            {tabs}
            {contents[index]}
        </>
    )
}

const Tab = ({ children, active=false, ...rest }: ITabProps) => (
    <button
        className={[
            styles.tab,
            active && styles.active
        ].join(" ")}
        {...rest}
    >{children}</button>
)
Tab.displayCode = "tab"
Tabs.Tab = Tab


const Content = ({ children }: PropsWithChildren) => (
    <div className={styles.content}>{children}</div>
)
Content.displayCode = "content"
Tabs.Content = Content

export default Tabs