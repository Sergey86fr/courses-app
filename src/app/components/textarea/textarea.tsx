import styles from "./textarea.module.css"
import cn from "classnames"
import { ITextAreaProps } from "./textarea.type"


export function TextArea({className, ...props}:ITextAreaProps) {
    return (
        <textarea  className={cn(styles.textarea, className || "")} {...props}/>
    )
}