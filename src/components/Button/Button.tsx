import { forwardRef } from "react"
import styles from "./Button.module.scss"
import { IButtonProps } from "./types"

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
    size = "md",
    variant = "primary",
    color = "primary",
    leftIcon,
    rightIcon,
    children,
    ...rest
}: IButtonProps, ref) => (
    <button
        ref={ref}
        className={[
            styles.button,
            styles[size + "-size"],
            styles[color + "-color"],
            styles[variant + "-type"],
        ].join(" ")}
        {...rest}
    >
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
    </button>
))

export default Button