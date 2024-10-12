import { PropsWithChildren } from "react"
import styles from "./Stepper.module.scss"
import { IStepProps } from "./types"

const Stepper = ({
    children
}: PropsWithChildren) => (
    <div className={styles.container}>
        {children}
    </div>
)


Stepper.Step = ({ children, status="progress", ...rest }: IStepProps) => (
    <div 
        className={[styles.step, styles[status]].join(" ")}
        {...rest}
    >{children}</div>
)

export default Stepper