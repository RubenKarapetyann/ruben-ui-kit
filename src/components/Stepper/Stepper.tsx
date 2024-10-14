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


Stepper.Step = ({ children, status="progress", label, ...rest }: IStepProps) => (
    <div className={[styles.stepContainer, styles[status]].join(" ")}>
        <div 
            className={styles.step}
            {...rest}
        >{children}</div>
        {label && <span className={styles.label}>{label}</span>}
    </div>
)

export default Stepper