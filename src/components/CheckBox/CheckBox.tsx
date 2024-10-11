import { forwardRef } from "react"
import { ICheckBoxProps } from "./types"
import styles from "./CheckBox.module.scss"

const CheckBox = forwardRef<
    HTMLInputElement, ICheckBoxProps
>(({
    checkBoxSize = "md",
    error,
    ...rest
}: ICheckBoxProps, ref) => (
    <input
        type="checkbox"
        className={[
            styles.checkbox,
            styles["checkbox-" + checkBoxSize],
            error && styles.error
        ].join(" ")}
        ref={ref}
        {...rest}
    />
))

export default CheckBox