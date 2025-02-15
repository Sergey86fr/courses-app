import styles from "./footer.module.css"
import cn from "classnames"
import { IFooterProps } from "./footer.type"
import { format } from "date-fns"

export function Footer({className,...props}:IFooterProps) {
    return (
        <div {...props} 
        className={cn(className ?? "" , styles.footer)}
        >
          <div>
          IBRAIN © 2023 - { format(new Date(), "yyyy")} Все права защищены
          </div>
          <div>
          Пользовательское соглашение
          </div>
          <div>
          Политика конфиденциальности
          </div>
        </div>
    )
}
