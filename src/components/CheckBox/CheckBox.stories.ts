import { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./CheckBox";
import "../../styles/index.css"

const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
    title: "Checkbox",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof CheckBox>


export const Default: Story = {
    name: "default",
}

export const Large: Story = {
    name: "large",
    args: {
        checkBoxSize: "lg"
    }
}

export const Medium: Story = {
    name: "medium",
    args: {
        checkBoxSize: "md"
    }
}

export const Small: Story = {
    name: "small",
    args: {
        checkBoxSize: "sm"
    }
}

export const Label: Story = {
    name: "label",
    args: {
        label: "Some Label"
    }
}


export const Error: Story = {
    name: "error",
    args: {
        error: true
    }
}

export const Disabled: Story = {
    name: "disabled",
    args: {
        disabled: true
    }
}

export const DisabledWithError: Story = {
    name: "disabled error",
    args: {
        disabled: true,
        error: true
    }
}