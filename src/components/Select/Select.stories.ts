import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Select from "./Select"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const meta: Meta<typeof Select> = {
    component: Select,
    title: "Select",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
    name: "default",
    args: {
        options
    }
}


export const Small: Story = {
    name: "small",
    args: {
        options,
        inputSize: "sm"
    }
}

export const Medium: Story = {
    name: "medium",
    args: {
        options,
        inputSize: "md"
    }
}

export const Large: Story = {
    name: "large",
    args: {
        options,
        inputSize: "lg"
    }
}

export const Multi: Story = {
    name: "multi",
    args: {
        options,
        isMulti: true
    }
}

export const Label: Story = {
    name: "label",
    args: {
        options,
        label: "Some Label"
    }
}

export const Error: Story = {
    name: "error",
    args: {
        options,
        error: "something went wrong"
    }
}

export const LeftIcon: Story = {
    name: "left icon",
    args: {
        options,
        leftIcon: "icon"
    }
}


export const RightIcon: Story = {
    name: "right icon",
    args: {
        options,
        rightIcon: "icon"
    }
}


export const Icons: Story = {
    name: "icons",
    args: {
        options,
        rightIcon: "icon",
        leftIcon: "icon"
    }
}