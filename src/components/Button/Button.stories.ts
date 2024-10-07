import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    name: "default",
    args: {
        children: "Click me",
    }
}

export const Primary: Story = {
    name: "primary",
    args: {
        children: "Click me",
        type: "primary"
    }
}

export const Secondary: Story = {
    name: "secondary",
    args: {
        children: "Click me",
        type: "secondary"
    }
}

export const Outlined: Story = {
    name: "outlined",
    args: {
        children: "Click me",
        type: "outlined"
    }
}

export const Large: Story = {
    name: "large",
    args: {
        children: "Click me",
        size: "lg"
    }
}

export const Medium: Story = {
    name: "medium",
    args: {
        children: "Click me",
        size: "md"
    }
}

export const Small: Story = {
    name: "small",
    args: {
        children: "Click me",
        size: "sm"
    }
}