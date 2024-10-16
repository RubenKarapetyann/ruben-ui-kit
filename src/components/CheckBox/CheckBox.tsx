import { forwardRef, useId } from "react"
import { ICheckBoxProps } from "./types"
import styles from "./CheckBox.module.scss"

const CheckBox = forwardRef<
    HTMLInputElement, ICheckBoxProps
>(({
    checkBoxSize = "md",
    error,
    className,
    label,
    ...rest
}: ICheckBoxProps, ref) => {
    const inputId = useId()

    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                className={[
                    styles.checkbox,
                    styles["checkbox-" + checkBoxSize],
                    error && styles.error,
                ].join(" ") + ` ${className}`}
                ref={ref}
                id={inputId}
                {...rest}
            />
            {label && <label htmlFor={inputId}>{label}</label>}
        </div>
    )
})

export default CheckBox