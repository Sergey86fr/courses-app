import styles from "./paragraph.module.css"
import cn  from "classnames"
import { IParagraphProps } from "./paragraph.type";
import { PARAGRAPH_SIZE } from "./paragraph.enum";


export function Paragraph({children, className, size, ...props }:IParagraphProps) {
    return (
        <p className={cn(className ?? "", {
            [styles.s]: size === PARAGRAPH_SIZE.SMALL,
            [styles.m]: size === PARAGRAPH_SIZE.MIDDLE,
            [styles.l]: size === PARAGRAPH_SIZE.LARGE,
        })} {...props}>
{children}
        </p>
    )
}

