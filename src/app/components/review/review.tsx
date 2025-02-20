import { IReviewProps } from "./review.props";
import cn from "classnames"
import styles from "./review.module.css"
import UserIcon from "./user.svg"
import {format} from  "date-fns"
import {ru} from "date-fns/locale"
import { RatingStar } from "../ratingStar/ratingStar"
import { Divider } from "../divider/divider";


export function Review ({review, className, ...props} :IReviewProps) {
    return (
      <>
        <div className={cn(styles.review, className || "")} {...props}>
          <UserIcon/>
          <div>
            <span className={cn(styles.userName)}>{review?.name}:</span>
            <span className={cn(styles.reviewTitle)}>{review?.title}</span>
          </div>
          <div className={cn(styles.date)}>{
          format(new Date(review?.createdAt), "dd MMMM yyyy",{
            locale: ru
          })}
          </div>
          <RatingStar rating={review?.rating}/>
          <div className={cn(styles.desc)}>
            {review?.description}
          </div>
        </div>
          <Divider />
      </>
    )
}