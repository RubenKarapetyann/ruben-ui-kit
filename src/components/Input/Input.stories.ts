import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Input from "./Input"

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Input",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    name: "default",
    args: {
        value: "some text",
        placeholder: "enter text"
    }
}

export const Large: Story = {
    name: "large",
    args: {
        value: "some large text",
        inputSize: "lg"
    }
}

export const Medium: Story = {
    name: "medium",
    args: {
        value: "some medium text",
        inputSize: "md"
    }
}

export const Small: Story = {
    name: "small",
    args: {
        value: "some small text",
        inputSize: "sm"
    }
}

export const WithLeftIcon: Story ={
    name: "left icon",
    args: {
        value: "some text",
        leftIcon: "icon"
    }
}

export const WithRightIcon: Story ={
    name: "right icon",
    args: {
        value: "some text",
        rightIcon: "icon"
    }
}

export const WithBothIcons: Story ={
    name: "icons",
    args: {
        value: "some text",
        rightIcon: "icon",
        leftIcon: "icon"
    }
}

export const Error: Story = {
    name: "error",
    args: {
        value: "some text",
        error: "something went wrong"
    } 
}

export const Label: Story = {
    name: "label",
    args: {
        value: "some text",
        label: "Some Label"
    }
}