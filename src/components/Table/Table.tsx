import styles from "./Table.module.scss"
import { DivProps } from "./types"

const Table = ({ children }: DivProps) => <div className={styles.table}>{children}</div>

Table.Header = ({ children }: DivProps) => <div className={styles.header}>{children}</div>
Table.HeaderItem = ({ children }: DivProps) => <div className={styles.headerItem}>{children}</div>
Table.Row = ({ children }: DivProps) => <div className={styles.row}>{children}</div>
Table.Item = ({ children }: DivProps) => <div className={styles.item}>{children}</div>
Table.Body = ({ children }: DivProps) => <div>{children}</div>
Table.Footer = ({ children }: DivProps) => <div className={styles.footer}>{children}</div>

export default Table