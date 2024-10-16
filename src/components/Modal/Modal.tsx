import { cloneElement, PropsWithChildren } from "react"
import styles from "./Modal.module.scss"
import { ICloseButtonProps, IModalProps } from "./types"
import runThroughAllChildren from "../../utils/runThroughAllChildren"


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
            // ????????????????????????????????? 
            const anyChild = child as any
            if (typeof anyChild.type === "string") {
                return anyChild
            }

            const type: string = anyChild.type.displayCode as string
            if (type === "closeButton") {
                return cloneElement(
                    anyChild,
                    { onClose }
                )
            }
            return anyChild
        }
    })
        
    return (
        <div className={styles.background} onClick={onCloseOutside}>
            {/* stops bubling */}
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                {newChildren}
            </div>
        </div>
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

const CloseButton = ({ children, onClose }: ICloseButtonProps) => (
    <button
        className={styles.button}
        onClick={onClose}
    >{children || "x"}</button>
)
CloseButton.displayCode = "closeButton"
Modal.CloseButton = CloseButton

export default Modal