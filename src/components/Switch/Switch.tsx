import { ISwitchProps } from "./types"
import styles from "./Switch.module.scss"

const Switch = ({
    active = false,
    error,
    onSwitch,
    size = "md",
}: ISwitchProps) => (
    <div className={[
        styles.container,
        styles["switch-" + size],
        styles[active ? "active" : "inert"],
        error && styles.error
    ].join(" ")} onClick={onSwitch}>
        <div className={styles.circle} />
    </div>
)

export default Switch