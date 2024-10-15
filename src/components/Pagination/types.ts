import { Colors, Sizes } from "../../types";
import { ButtonForms } from "../Button/types";

export interface IPaginationProps {
    count: number,
    page?: number,
    pageChangeHandle?: (page: number) => void,
    pageIncrement?: () => void,
    pageDecrement?: () => void,
    form?: ButtonForms,
    variant?: "outlined" | "secondary",
    size?: Sizes,
    color?: Colors
}

