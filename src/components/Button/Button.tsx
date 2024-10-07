import { forwardRef } from "react"
import styles from "./Button.module.scss"
import { IButtonProps } from "./types"

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
    size = "md",
    type = "primary",
    color = "primary",
    leftIcon,
    rightIcon,
    children
}: IButtonProps, ref) => (
    <button
        ref={ref}
        className={[
            styles.button,
            styles[size + "-size"],
            styles[color + "-color"],
            styles[type + "-type"],
        ].join(" ")}
    >
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
    </button>
))

export default Button