import Button from "../Button/Button"
import styles from "./Pagination.module.scss"
import { IPaginationProps } from "./types"

const Pagination = ({
    count,
    page = 1,
    pageChangeHandle,
    pageDecrement,
    pageIncrement,
    form = "smooth",
    variant = "secondary",
    size = "md",
    color = "primary"
}: IPaginationProps) => {
    const commonProps = { size, color, form }
    const pageHandle = (page: number) => pageChangeHandle && pageChangeHandle(page)

    if (count >= 2 && page > 0 && page <= count) {
        return (
            <div className={styles.container}>
                <Button
                    variant={variant}
                    onClick={pageDecrement}
                    disabled={page === 1}
                    {...commonProps}
                >{"<"}</Button>
                <Button
                    variant={1 === page ? "primary" : variant}
                    onClick={() => pageHandle(1)}
                    {...commonProps}
                >1</Button>
                {page > 3 && "..."}
                {[page - 1, page, page + 1].map(i => i > 1 && i < count && (
                    <Button
                        variant={i === page ? "primary" : variant}
                        key={i}
                        onClick={() => pageHandle(i)}
                        {...commonProps}
                    >{i}</Button>
                ))}
                {page < count - 2 && "..."}
                <Button
                    variant={count === page ? "primary" : variant}
                    onClick={() => pageHandle(count)}
                    {...commonProps}
                >{count}</Button>
                <Button
                    variant={variant}
                    onClick={pageIncrement}
                    disabled={page === count}
                    {...commonProps}
                >{">"}</Button>
            </div>
        )
    } else {
        return null
    }

}

export default Pagination