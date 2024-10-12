import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Table from "./Table"

const meta: Meta<typeof Table> = {
    component: Table,
    title: "Table",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
    name: "default",
    args: {
        children: [
            <Table.Header>
                <Table.HeaderItem>id</Table.HeaderItem>
                <Table.HeaderItem>name</Table.HeaderItem>
            </Table.Header>,
            <Table.Body>
                <Table.Row>
                    <Table.Item>1</Table.Item>
                    <Table.Item>Someone 1</Table.Item>
                </Table.Row>
                
                <Table.Row>
                    <Table.Item>2</Table.Item>
                    <Table.Item>Someone 2</Table.Item>
                </Table.Row>
            </Table.Body>
        ]
    }
}

export const Footer: Story = {
    name: "footer",
    args: {
        children: [
            <Table.Header>
                <Table.HeaderItem>id</Table.HeaderItem>
                <Table.HeaderItem>name</Table.HeaderItem>
            </Table.Header>,
            <Table.Body>
                <Table.Row>
                    <Table.Item>1</Table.Item>
                    <Table.Item>Someone 1</Table.Item>
                </Table.Row>
                
                <Table.Row>
                    <Table.Item>2</Table.Item>
                    <Table.Item>Someone 2</Table.Item>
                </Table.Row>
            </Table.Body>,
            <Table.Footer>some footer</Table.Footer>
        ]
    }
}