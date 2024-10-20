import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Popover from "./Popover"

const meta: Meta<typeof Popover> = {
    component: Popover,
    title: "Popover",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
    name: "default",
    args: {
        isOpen: true,
        children: [
            <Popover.Button>popover</Popover.Button>,
            <Popover.Content>some content</Popover.Content>
        ]
    }
}

export const Closed: Story = {
    name: "closed",
    args: {
        isOpen: false,
        children: [
            <Popover.Button>popover</Popover.Button>,
            <Popover.Content>closed content</Popover.Content>
        ]
    }
}

export const StyledButon: Story = {
    name: "styled button",
    args: {
        isOpen: true,
        children: [
            <Popover.Button variant="outlined" color="warning">popover</Popover.Button>,
            <Popover.Content>some content</Popover.Content>
        ]
    }
}

export const WithOutContentWrapper: Story = {
    name: "without wrapper",
    args: {
        isOpen: true,
        children: [
            <Popover.Button>popover</Popover.Button>,
            "some content"
        ]
    }
}

export const WithButtonInsideContent: Story = {
    name: "button inside content",
    args: {
        isOpen: true,
        children: [
            <Popover.Button>popover</Popover.Button>,
            <Popover.Content>
                some content
                <Popover.Button>x</Popover.Button>
            </Popover.Content>
        ]
    }
}