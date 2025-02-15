import { H_TAG_VARIANT } from "./htag.enum";
import { IHtagProps } from "./htag.type";
import cn from "classnames"
import styles from "./htag.module.css"



export function HTag({children, tag, className}:IHtagProps) {
   switch (tag) {
    case H_TAG_VARIANT.h1: return <h1 className={cn(styles.button, className ?? "")}>{children}</h1>;
    case H_TAG_VARIANT.h2: return <h2 className={cn(styles.button, className ?? "")}>{children}</h2>;
    case H_TAG_VARIANT.h3: return <h3 className={cn(styles.button, className ?? "")}>{children}</h3>;
    case H_TAG_VARIANT.h4: return <h4 className={cn(styles.button, className ?? "")}>{children}</h4>;
    case H_TAG_VARIANT.h5: return <h5 className={cn(styles.button, className ?? "")}>{children}</h5>;
    default: return <></>;
   }
}
