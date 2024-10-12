import Button from "../Button/Button"
import styles from "./Pagination.module.scss"
import { IPaginationProps } from "./types"

const Pagination = ({
    count,
    page=1,
    pageChangeHandle,
    pageDecrement,
    pageIncrement,
}: IPaginationProps) => count > 0 && page > 0 && (
    <div className={styles.container}>
        <Button
            variant="secondary"
            onClick={pageDecrement}
            disabled={page === 1}
        >{"<"}</Button>
        {[page - 1, page, page + 1].map(i => i > 0 && i <= count && (
            <Button
                variant={i === page ? "primary" : "secondary"}
                key={i}
                onClick={() => pageChangeHandle && pageChangeHandle(i)}
            >{i}</Button>
        ))}
        <Button
            variant="secondary"
            onClick={pageIncrement}
            disabled={page === count}
        >{">"}</Button>
    </div>
)

export default Pagination