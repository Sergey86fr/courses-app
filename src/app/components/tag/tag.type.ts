import { DetailsHTMLAttributes, ReactNode } from "react";
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";

export interface ITagProps extends DetailsHTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    size: TAG_SIZE,
    variant: TAG_VARIANT,
    href?: string
}