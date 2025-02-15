import { IInputProps } from "./input.type";
import styles from "./input.module.css"
import cn from "classnames"


export function Input({className, ...props}:IInputProps) {
    return (
        <input type="text"  className={cn(styles.input, className || "")} {...props}/>
    )
}