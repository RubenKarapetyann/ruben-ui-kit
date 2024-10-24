import { ITextFieldProps } from "./types";
import styles from "./TextField.module.scss"
import { Children, cloneElement, isValidElement, ReactElement, useId } from "react";

const TextField = ({ 
    children,
    leftIcon,
    rightIcon,
    error,
    label,
    inputSize = "md",
    style
}: ITextFieldProps) => {
    const inputId = useId()
    const input = Children.only(children)
    if (!isValidElement(input)) {
        return
    }

    return (
        <div>
            {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
            <div className={[styles.container, error && styles.error].join(" ")}>
                {leftIcon && <span className={[styles.icon, styles.leftIconContainer, error && styles.iconError].join(" ")}>{leftIcon}</span>}
                {cloneElement(input as ReactElement , {
                    className: [
                        styles.input,
                        styles["input-" + inputSize]
                    ].join(" "),
                    id: inputId,
                    style
                })}
                {rightIcon && <span className={[styles.icon, styles.rightIconContainer, error && styles.iconError].join(" ")}>{rightIcon}</span>}
            </div>
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    )
}

export default TextField