import styles from "./Table.module.scss"
import { DivProps } from "./types"

const Table = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.table}>{children}</div>

Table.Header = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.header}>{children}</div>
Table.HeaderItem = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.headerItem}>{children}</div>
Table.Row = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.row}>{children}</div>
Table.Item = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.item}>{children}</div>
Table.Body = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.body}>{children}</div>
Table.Footer = ({ children, ...rest }: DivProps) => <div {...rest} className={styles.footer}>{children}</div>

export default Table