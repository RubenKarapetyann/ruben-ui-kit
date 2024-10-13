import { forwardRef } from "react"
import styles from "./Button.module.scss"
import { IButtonProps } from "./types"

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
    size = "md",
    variant = "primary",
    color = "primary",
    form = "smooth",
    shadows = false,
    className,
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
            styles[form + "-form"],
            shadows && styles.shadows
        ].join(" ") + ` ${className}`}
        {...rest}
    >
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
    </button>
))

export default Button