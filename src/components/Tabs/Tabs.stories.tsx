import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Tabs from "./Tabs"

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    title: "Tabs",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
    name: "default",
    args: {
        children: [
            <Tabs.Tab>1</Tabs.Tab>,
            <Tabs.Tab>2</Tabs.Tab>,
            <Tabs.Content>content 1</Tabs.Content>,
            <Tabs.Content>content 2</Tabs.Content>
        ]
    }
}
