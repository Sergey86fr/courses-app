"use client"
import { JSX, useEffect, useState, KeyboardEvent} from "react";
import { IRatingProps } from "./ratingStar.type";
import  Star  from "./star.svg"
import styles from "./ratingStar.module.css"
import cn from "classnames"
import React from "react";

export function RatingStar({rating, isEditable, setRating, ... props}:IRatingProps) {
  const [arrayStar, setArrayStar] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
renderStar(rating)
  },[rating])

  const renderStar = (currentRating: number) => {
    const updatedStar = arrayStar.map((star: JSX.Element, idx: number) => {
         return (
          <Star className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editedStar]: isEditable,
          })} key={idx}
          onMouseEnter={() => onHoverStar(idx + 1)}
          onMouseLeave={() => onHoverStar(rating)}
          onKeyDown={(e:KeyboardEvent<SVGElement>) => onPressRating(e, idx + 1)}
          onClick={() => onSetRating(idx + 1)}
          tabIndex={isEditable ? 0 : -1}
          />
         )
    })
    setArrayStar(updatedStar)
  }

    const onHoverStar = (idx:number) => {
      if(!isEditable) return;
        renderStar(idx)
    }
      
const onPressRating = (e: KeyboardEvent<SVGElement>, rating:number) => {
  if(setRating && isEditable && e.code === "Space")  {
    setRating(rating)
  }
}


    const onSetRating = (rating:number) => {
      if(isEditable && setRating) 
        setRating(rating)
      return;

    }

    return(
        <div {... props}>
            {arrayStar.map((star:JSX.Element, idx: number) => <React.Fragment key={idx}>{star}</React.Fragment>)}
        </div>
    )
}