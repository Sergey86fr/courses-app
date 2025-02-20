import styles from "./divider.module.css"
import cn from "classnames"

export function Divider () {
    return (
        <div className={cn(styles.divider)}></div>
    )
}