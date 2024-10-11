import { forwardRef } from "react"
import TextField from "../TextField/TextField"
import { ITextareaProps } from "./types"

const Textarea = forwardRef<
    HTMLTextAreaElement, ITextareaProps
>(({
    error,
    leftIcon,
    rightIcon,
    inputSize,
    ...rest
}: ITextareaProps, ref) => (
    <TextField
        error={error}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        inputSize={inputSize}
    ><textarea {...rest} ref={ref}/></TextField>
))

export default Textarea