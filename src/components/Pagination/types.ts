export interface IPaginationProps {
    count: number,
    page?: number,
    pageChangeHandle?: (page: number) => void,
    pageIncrement?: () => void,
    pageDecrement?: () => void
}

