import { forwardRef } from "react"
import { IInputProps } from "./types"
import TextField from "../TextField/TextField"

const Input = forwardRef<
    HTMLInputElement, IInputProps
>(({
    error,
    leftIcon,
    rightIcon,
    inputSize = "md",
    label,
    ...rest
}: IInputProps, ref) => (
    <TextField
        error={error}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        inputSize={inputSize}
        label={label}
    ><input ref={ref} {...rest} /></TextField>
))

export default Input