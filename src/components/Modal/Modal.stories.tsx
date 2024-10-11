import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Modal from "./Modal"

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: "Modal",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
    name: "default",
    args: {
        isOpen: true
    }
}

export const CloseButton: Story = {
    name: "close button",
    args: {
        isOpen: true,
        children: <Modal.CloseButton>x</Modal.CloseButton>
    }
}

export const Content: Story = {
    name: "content",
    args: {
        isOpen: true,
        children: <Modal.Content>Some Content</Modal.Content>
    }
}

export const ContentWithCloseButton: Story = {
    name: "content with close button",
    args: {
        isOpen: true,
        children: (
            <>
                <Modal.CloseButton>x</Modal.CloseButton>
                <Modal.Content>Some Content</Modal.Content>
            </>
        )
    }
}

export const Title: Story = {
    name: "title",
    args: {
        isOpen: true,
        children: (
            <>
                <Modal.Title>Some Title</Modal.Title>
                <Modal.Content>Some Content</Modal.Content>
            </>
        )
    }
}


export const TitleWithCloseButton: Story = {
    name: "title with close button",
    args: {
        isOpen: true,
        children: (
            <>
                <Modal.Title>Some Title <Modal.CloseButton/></Modal.Title>
                <Modal.Content>Some Content</Modal.Content>
            </>
        )
    }
}

export const Footer: Story = {
    name: "footer",
    args: {
        isOpen: true,
        children: (
            <>
                <Modal.Content>Some Content</Modal.Content>
                <Modal.Footer>Footer Text</Modal.Footer>
            </>
        )
    }
}

export const TitleAndFooter: Story = {
    name: "title and footer",
    args: {
        isOpen: true,
        children: (
            <>
                <Modal.Title>Some Title</Modal.Title>
                <Modal.Content>Some Content</Modal.Content>
                <Modal.Footer>Footer Text</Modal.Footer>
            </>
        )
    }
}
