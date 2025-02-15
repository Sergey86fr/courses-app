import { ITagProps } from "./tag.type";
import styles from "./tag.module.css"
import cn from "classnames"
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";

export function Tag({
  children,
  className,
  size,
  variant,
  href,
  ...props
}: ITagProps) {
  return (
  <div className={cn(styles.tag, className ?? "" , {
    [styles.s]: size === TAG_SIZE.SMALL,
    [styles.m]: size === TAG_SIZE.MIDDLE,
    [styles.gray]:  variant === TAG_VARIANT.GRAY,
    [styles.green]: variant === TAG_VARIANT.GREEN,
    [styles.red]: variant === TAG_VARIANT.RED,
    [styles.transparent]: variant === TAG_VARIANT.TRANSPARENT,
    [styles.primary]: variant === TAG_VARIANT.PRIMARY,
  })} {...props}>
    { href ? <a href = { href } target="_blank">{children}</a> :  children }
  </div>
  ) 
}
