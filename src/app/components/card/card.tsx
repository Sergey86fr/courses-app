import { ICardProps } from "./card.props";
import styles from "./card.module.css";
import cn from "classnames";

export function Card({ children, color, className, ...props }: ICardProps) {
  return (
    <div
      className={cn(styles.card, className || "", {
        [styles.secondary]: color === "purple",
        [styles.primary]: color === "white"
      })}
      {...props}
    >
      {children}
    </div>
  );
}
