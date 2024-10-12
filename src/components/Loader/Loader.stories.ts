import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Loader from "./Loader"

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: "Loader",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Loader>

export const Default: Story = {
    name: "default",
    args: {
        loading: true,
    }
}

export const Minimum: Story = {
    name: "minimum",
    args: {
        loading: false,
    }
}