import { Children, cloneElement, isValidElement, PropsWithChildren, ReactNode, useState } from "react"
import styles from "./Tabs.module.scss"
import { IContentProps, ITabProps } from "./types"

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
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs}
            </div>
            {contents[index]}
        </div>
    )
}

const Tab = ({ children, active=false, className, ...rest }: ITabProps) => (
    <button
        className={[
            styles.tab,
            active && styles.active
        ].join(" ") + ` ${className}`}
        {...rest}
    >{children}</button>
)
Tab.displayCode = "tab"
Tabs.Tab = Tab


const Content = ({ children, className }: IContentProps) => (
    <div className={styles.content + ` ${className}`}>{children}</div>
)
Content.displayCode = "content"
Tabs.Content = Content

export default Tabs