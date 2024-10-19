import { SelectType } from "./types"
import ReactSelect, { components } from "react-select"
import TextField from "../TextField/TextField"

const Select: SelectType = ({
    leftIcon,
    rightIcon,
    error,
    inputSize,
    label,
    options,
    ...rest
}) => {

    return (
        <ReactSelect
            {...rest}
            options={options}
            components={{
                Control: ({ children, ...rest }) => (
                    <components.Control {...rest}>
                        <TextField
                            leftIcon={leftIcon}
                            rightIcon={rightIcon}
                            error={error}
                            inputSize={inputSize}
                            label={label}
                            style={{ 
                                display: "flex",
                                padding: "0px"
                            }}
                        >
                            <div>
                                {children}
                            </div>
                        </TextField>
                    </components.Control>
                ),
            }}
            styles={{
                control: () => ({
                    width: "100%",
                    position: "relative",
                    padding: 0,
                }),
                placeholder: () => ({
                    position: "absolute",
                    color: "var(--secondary)",
                    left: "13px"
                }),
                singleValue: () => ({
                    position: "absolute",
                    left: "13px",
                }),
                menu: base => ({
                    ...base,
                    maxWidth: "800px"
                })
            }}
        />
    )
}

export default Select