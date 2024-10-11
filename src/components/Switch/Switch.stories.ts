import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Switch from "./Switch"

const meta: Meta<typeof Switch> = {
    component: Switch,
    title: "Switch",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    name: "default",
}

export const Large: Story = {
    name: "large",
    args: {
        size: "lg"
    }
}

export const Medium: Story = {
    name: "medium",
    args: {
        size: "md"
    }
}

export const Small: Story = {
    name: "small",
    args: {
        size: "sm"
    }
}

export const Error: Story = {
    name: "error",
    args: {
        error: true
    }
}