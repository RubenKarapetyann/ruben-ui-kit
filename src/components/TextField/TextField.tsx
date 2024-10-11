import { ITextFieldProps } from "./types";
import styles from "./TextField.module.scss"
import { Children, cloneElement, isValidElement, ReactElement } from "react";

const TextField = ({ 
    children,
    leftIcon,
    rightIcon,
    error,
    inputSize = "md"
}: ITextFieldProps) => {
    const input = Children.only(children)
    if (!isValidElement(input)) {
        return
    }

    return (<>
        <div className={styles.container}>
            {leftIcon && <span className={[styles.leftIconContainer, error && styles.iconError].join(" ")}>{leftIcon}</span>}
            {cloneElement(input as ReactElement , { // ???????????
                className: [
                    styles.input,
                    styles["input-" + inputSize],
                    error && styles.error,
                    leftIcon && styles.leftIconInput,
                    rightIcon && styles.rightIconInput
                ].join(" ")
            })}
            {rightIcon && <span className={[styles.rightIconContainer, error && styles.iconError].join(" ")}>{rightIcon}</span>}
        </div>
        {error && <span className={styles.errorMessage}>{error}</span>}
    </>)
}

export default TextField