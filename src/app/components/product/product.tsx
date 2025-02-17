/* eslint-disable @next/next/no-img-element */
import { Card } from "../card/card";
import { IProductProps } from "./product.type";
import styles from "./product.module.css";
import cn from "classnames";
import { formatPrice } from "@/app/helper/format-price.helper";
import { Tag } from "../tag/tag";
import { TAG_SIZE, TAG_VARIANT } from "../tag/tag.enum";
import { RatingStar } from "../ratingStar/ratingStar";
import { Button } from "../button/button";
import { ARROW_BUTTON_POSITION, BUTTON_VARIANT } from "../button/button.enum";
import { declensionWords } from "@/app/helper/declension-words.helper";

export function Product({ product, className, ...props }: IProductProps) {
  return (
    <Card
      color="white"
      className={cn(styles.product, className ?? "")}
      {...props}
    >
      <div className={cn(styles.logo)}>
        <img src={product.image} alt={product?.title} />
      </div>
      <div className={cn(styles.title)}>{product.title}</div>
      <div className={cn(styles.price)}>
        {formatPrice(product.oldPrice)}
        <Tag size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.GREEN}>
          {formatPrice(product.price - product.oldPrice)}
        </Tag>
      </div>
      <div className={cn(styles.credit)}>{formatPrice(product.credit)}</div>
      <div className={cn(styles.rating)}>
        <RatingStar rating={product.reviewAvg || product.initialRating} />
      </div>
      <div className={cn(styles.categories)}>
        {product.categories.map((c) => (
          <Tag key={c} size={TAG_SIZE.SMALL} variant={TAG_VARIANT.TRANSPARENT}>
            {c}{" "}
          </Tag>
        ))}
      </div>
      <div className={cn(styles.priceTitle)}>Цена</div>
      <div className={cn(styles.creditTitle)}>В кредит</div>
      <div className={cn(styles.review)}>
        {product.reviewCount}{" "}
        {declensionWords(product?.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <div className={cn(styles.hr)} />
      <div className={cn(styles.desc)}>{product.description}</div>

      <div className={cn(styles.info)}>
        {product.characteristics.map((char) => (
          <div className={cn(styles.char)} key={char.name}>
            <span className={cn(styles.charTitle)}>{char.name}</span>
            <span className={cn(styles.charDots)}></span>
            <span className={cn(styles.charText)}>{char.value}</span>
          </div>
        ))}
        {product.tags.map((t) => (
          <Tag
            className={cn(styles.tag)}
            key={t}
            size={TAG_SIZE.SMALL}
            variant={TAG_VARIANT.TRANSPARENT}
          >
            {t}
          </Tag>
        ))}
      </div>
      <div className={cn(styles.advBlock)}>
        <div className={cn(styles.adv)}>
          <div className={cn(styles.advTitle)}>Преимущества</div>
          <div className={cn(styles.advDesc)}>{product?.advantages ?? ""}</div>
        </div>
        {product?.disadvantages && (
          <div className={cn(styles.disadv)}>
            <div className={cn(styles.advTitle)}>Недостатки</div>
            <div className={cn(styles.advDesc)}>
              {product?.disadvantages ?? ""}
            </div>
          </div>
        )}
      </div>
      <div className={cn(styles.hr1)}></div>
      <div className={cn(styles.actions)}>
        <Button variant={BUTTON_VARIANT.PRIMARY}>Узнать подробнее</Button>
        <Button
          className={cn(styles.reviewBtn)}
          arrow={ARROW_BUTTON_POSITION.RIGHT}
          variant={BUTTON_VARIANT.TRANSPARENT}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
}
