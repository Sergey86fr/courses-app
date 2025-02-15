import { ReactNode } from "react";
import { H_TAG_VARIANT } from "./htag.enum";

export interface IHtagProps {
    tag: H_TAG_VARIANT,
    children: ReactNode,
    className?:string
}