import { Meta, StoryObj } from "@storybook/react"
import "../../styles/index.css"
import Stepper from "./Stepper"

const meta: Meta<typeof Stepper> = {
    component: Stepper,
    title: "Stepper",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Default: Story = {
    name: "default",
    args: {
        children: (
            <>
                <Stepper.Step status="progress">1</Stepper.Step>
                <Stepper.Step status="success">2</Stepper.Step>
                <Stepper.Step status="reject">3</Stepper.Step>
            </>
        )
    }
}

export const Success: Story = {
    name: "success",
    args: {
        children: <Stepper.Step status="success">1</Stepper.Step>
    }
}


export const Progress: Story = {
    name: "progress",
    args: {
        children: <Stepper.Step status="progress">1</Stepper.Step>
    }
}

export const Reject: Story = {
    name: "reject",
    args: {
        children: <Stepper.Step status="reject">1</Stepper.Step>
    }
}
