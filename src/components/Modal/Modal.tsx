import { cloneElement, PropsWithChildren } from "react"
import styles from "./Modal.module.scss"
import { ICloseButtonProps, IModalProps } from "./types"
import runThroughAllChildren from "../../utils/runThroughAllChildren"
import Button from "../Button/Button"


const Modal = ({
    isOpen,
    onClose,
    closeIfClickedOutside,
    children
}: IModalProps) => {
    if (!isOpen) {
        return
    }

    const onCloseOutside = () => {
        if (onClose && closeIfClickedOutside) {
            onClose()
        }
    }

    const newChildren = runThroughAllChildren({
        children, handle: child => {
            const type = child.type.displayCode

            if (type === "closeButton") {
                return cloneElement(
                    child,
                    { onClose }
                )
            }
            return child
        }
    })
        
    return (
        <>
            <div className={styles.container}>
                {newChildren}
            </div>
            <div className={styles.background} onClick={onCloseOutside}>
            </div>
        </>
    )
}

Modal.Title = ({ children }: PropsWithChildren) => (
    <div className={styles.title}>{children}</div>
)

Modal.Content = ({ children }: PropsWithChildren) => (
    <div className={styles.content}>{children}</div>
)

Modal.Footer = ({ children }: PropsWithChildren) => (
    <div className={styles.footer}>{children}</div>
)

const CloseButton = ({ children, onClose, ...rest }: ICloseButtonProps) => (
    <Button
        variant="outlined"
        color="secondary"
        form="rounded"
        onClick={onClose}
        {...rest}
    >{children || "x"}</Button>
)
CloseButton.displayCode = "closeButton"
Modal.CloseButton = CloseButton

export default Modal