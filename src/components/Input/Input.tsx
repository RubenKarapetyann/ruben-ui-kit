import { forwardRef } from "react"
import { IInputProps } from "./types"
import styles from "./Input.module.scss"

const Input = forwardRef<
    HTMLInputElement, IInputProps
>(({
    error,
    leftIcon,
    rightIcon,
    inputSize = "md",
    ...rest
}: IInputProps, ref) => (
    <>
        <div className={styles.container}>
            {leftIcon && <span className={[styles.leftIconContainer, error && styles.iconError].join(" ")}>{leftIcon}</span>}
            <input
                ref={ref}
                className={[
                    styles.input,
                    styles["input-" + inputSize],
                    error && styles.error,
                    leftIcon && styles.leftIconInput,
                    rightIcon && styles.rightIconInput
                ].join(" ")}
                {...rest}
            />
            {rightIcon && <span className={[styles.rightIconContainer, error && styles.iconError].join(" ")}>{rightIcon}</span>}
        </div>
        {error && <span className={styles.errorMessage}>{error}</span>}
    </>
))

export default Input