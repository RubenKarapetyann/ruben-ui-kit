import { ReactElement } from "react";
import { GroupBase, Props } from "react-select";
import { ITextFieldProps } from "../TextField/types";


type ISelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<
    Option,
    IsMulti,
    Group
> & Omit<ITextFieldProps, "children">

export type SelectType = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: ISelectProps<Option, IsMulti, Group>) => ReactElement
