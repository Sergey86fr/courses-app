import { IHeaderProps } from "./header.type";
import styles from "./header.module.css";
import cn from "classnames";

 export function Header({...props}:IHeaderProps) {
    return (
        <div {...props}>
         Header
        </div>
    )
 }