import { Children, cloneElement, isValidElement, PropsWithChildren, ReactNode } from "react"
import Button from "../Button/Button"
import { IPopoverButtonProps, IPopoverProps } from "./types"
import runThroughAllChildren from "../../utils/runThroughAllChildren"
import styles from "./Popover.module.scss"

const Popover = ({
    isOpen,
    children,
    onToggle,
}: IPopoverProps) => {
    const toggles: ReactNode[] = []
    const content: ReactNode[] = []


    const newChildren = runThroughAllChildren({
        children, handle: child => {
            const type = child.type.displayCode

            if (type === "popoverButton") {
                return cloneElement(
                    child,
                    { onToggle }
                )
            }
            return child
        }
    })

    Children.forEach(newChildren, child => {
        if (isValidElement(child)) {
            if (typeof child.type === "string") {
                return
            }
            const anyChild = child as any
            const type = anyChild.type.displayCode as string
            
            if (type === "popoverButton") {
                toggles.push(anyChild)
            } else {
                content.push(anyChild)
            }
        } else {
            content.push(child)
        }
    })

    return (
        <div className={styles.container}>
            {toggles}
            {isOpen && content}
        </div>
    )
}

const PopoverButton = ({ children, onToggle, ...rest }: IPopoverButtonProps) => (
    <Button onClick={onToggle} {...rest}>{children}</Button>
)

PopoverButton.displayCode = "popoverButton"
Popover.Button = PopoverButton

Popover.Content = ({ children }: PropsWithChildren) => (
    <div className={styles.content}>{children}</div>
)

export default Popover