import { Sizes } from "../../types";

export interface ISwitchProps {
    active?: boolean,
    error?: boolean,
    onSwitch?: () => void,
    size?: Sizes
}