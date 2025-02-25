import { IInputProps } from "./input.type";
import styles from "./input.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";


// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { className,error,  ...props }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
     <div className={cn(styles.wrapper)}>
       {error &&  <span className={cn(styles.error)}>{error.message}</span>}
       <input
        type="text"
        ref={ref}
        className={cn(styles.input, className || "", {
          [styles.inputError] : error
        })}
        {...props}
      />
     </div>
    );
  }
);
