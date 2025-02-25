import styles from "./textarea.module.css"
import cn from "classnames"
import { ITextAreaProps } from "./textarea.type"
import { ForwardedRef, forwardRef } from "react"


// eslint-disable-next-line react/display-name
export const TextArea = forwardRef(({className, ...props}:ITextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <textarea ref={ref}  className={cn(styles.textarea, className || "")} {...props}/>
    )
})