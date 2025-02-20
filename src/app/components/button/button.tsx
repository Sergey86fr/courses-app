import { IButtonProps } from "./button.type";
import styles from "./button.module.css";
import cn from "classnames";
import { ARROW_BUTTON_POSITION, BUTTON_VARIANT } from "./button.enum";
import ArrowIcon from "./arrow.svg"

export function Button({
  children,
  variant,
  className,
  arrow,
  ...props
}: IButtonProps) {
  return (
    <button
      className={cn(styles.button, className ?? "", {
        [styles.primary]: variant === BUTTON_VARIANT.PRIMARY,
        [styles.transparent]: variant === BUTTON_VARIANT.TRANSPARENT,
      })}
      {...props}
    >
      {children}
      {arrow && (
        <span className={cn(styles.arrow, {
            [styles.down]: arrow === ARROW_BUTTON_POSITION.DOWN,
            [styles.right]: arrow === ARROW_BUTTON_POSITION.RIGHT,
        })}>
            < ArrowIcon />
        </span>
      )}
      
    </button>
  );
}
