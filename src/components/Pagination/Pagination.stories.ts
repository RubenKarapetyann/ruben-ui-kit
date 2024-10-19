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

export const Middle: Story = {
    name: "middle",
    args: {
        count: 10,
        page: 5
    }
}


export const Small: Story = {
    name: "small",
    args: {
        count: 10,
        page: 5,
        size: "sm"
    }
}

export const Medium: Story = {
    name: "medium",
    args: {
        count: 10,
        page: 5,
        size: "md"
    }
}

export const Large: Story = {
    name: "large",
    args: {
        count: 10,
        page: 5,
        size: "lg"
    }
}

export const Smooth: Story = {
    name: "smooth",
    args: {
        count: 10,
        page: 5,
        form: "smooth"
    }
}

export const Rounded: Story = {
    name: "rounded",
    args: {
        count: 10,
        page: 5,
        form: "rounded"
    }
}

export const Square: Story = {
    name: "square",
    args: {
        count: 10,
        page: 5,
        form: "square"
    }
}

export const Outlined: Story = {
    name: "outlined",
    args: {
        count: 10,
        page: 5,
        variant: "outlined"
    }
}


export const Secondary: Story = {
    name: "secondary",
    args: {
        count: 10,
        page: 5,
        variant: "secondary"
    }
}