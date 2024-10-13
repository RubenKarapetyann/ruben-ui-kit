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
        variant: "primary"
    }
}

export const Secondary: Story = {
    name: "secondary",
    args: {
        children: "Click me",
        variant: "secondary"
    }
}

export const Outlined: Story = {
    name: "outlined",
    args: {
        children: "Click me",
        variant: "outlined"
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

export const Rounded: Story = {
    name: "rounded",
    args: {
        children: "Click me",
        form: "rounded"
    }
}

export const Square: Story = {
    name: "square",
    args: {
        children: "Click me",
        form: "square"
    }
}

export const Smooth: Story = {
    name: "smooth",
    args: {
        children: "Click me",
        form: "smooth"
    }
}

export const Shadows: Story = {
    name: "shadows",
    args: {
        children: "Click me",
        shadows: true
    }
}