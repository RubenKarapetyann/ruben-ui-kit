import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Pagination from "./Pagination"

const meta: Meta<typeof Pagination> = {
    component: Pagination,
    title: "Pagination",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
    name: "default",
    args: {
        count: 10,
        page: 5
    }
}

export const Start: Story = {
    name: "start",
    args: {
        count: 10,
    }
}


export const End: Story = {
    name: "end",
    args: {
        count: 10,
        page: 10
    }
}

export const Single: Story = {
    name: "single",
    args: {
        count: 1
    }
}