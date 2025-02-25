"use client"
import { ITopPageComponent } from "./top-page-component.props";
import styles from "./top-page-component.module.css";
import cn from "classnames";
import { HTag } from "../htag/htag";
import { H_TAG_VARIANT } from "../htag/htag.enum";
import { Tag } from "../tag/tag";
import { TAG_SIZE, TAG_VARIANT } from "../tag/tag.enum";
import RateIcon from "./rate-icon.svg";
import { Card } from "../card/card";
import { formatPrice } from "@/app/helper/format-price.helper";
import CheckIcon from "./check-icon.svg";
import { Sort } from "../sort/sort";
import { SORT_VARIANT } from "../sort/sort.enum";
import { useReducer } from "react";
import { sortReducer } from "./sort-reducer";
import { Product } from "../product/product";

export function TopPageComponent({
  products,
  page,
}: ITopPageComponent) {

  const [{products:sortedProducts, sort}, dispatch] = useReducer(sortReducer, {products, sort: SORT_VARIANT.RATING});
  const setSort = (sort: SORT_VARIANT) => {
      dispatch({type:sort})
  }

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.header)}>
        <div className={cn(styles.title)}>
          <HTag tag={H_TAG_VARIANT.h1}>{page.title}</HTag>
          <Tag size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.GRAY}>
            {products?.length}
          </Tag>
        </div>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts?.map((p) => (
          <Product key={p._id} product={p} />
        ))}
        </ div>
      <div className={cn(styles.hhTitle)}>
        <HTag tag={H_TAG_VARIANT.h2}>Вакансии - </HTag>
        <Tag
          size={TAG_SIZE.MIDDLE}
          href="https://hh.ru"
          variant={TAG_VARIANT.RED}
        >
          hh.ru
        </Tag>
      </div>
      <div className={cn(styles.hh)}>
        <Card color={"white"}>
          <div className={cn(styles.cardTitle)}>Всего вакансий</div>
          <div className={cn(styles.hhStatCount)}>{page?.hh?.count}</div>
        </Card>
        <Card color={"white"} className={cn(styles.salary)}>
          <div>
            <div className={cn(styles.cardTitle)}>Начальный</div>
            <div className={cn(styles.salaryDesc)}>
              {formatPrice(page?.hh?.juniorSalary)}
            </div>
            <div className={cn(styles.rate)}>
              <RateIcon className={cn(styles.filledRate)} />
              <RateIcon />
              <RateIcon />
            </div>
          </div>
        </Card>
        <Card color={"white"} className={cn(styles.salary)}>
          <div>
            <div className={cn(styles.cardTitle)}>Средний</div>
            <div className={cn(styles.salaryDesc)}>
              {formatPrice(page?.hh?.middleSalary)}
            </div>
            <div className={cn(styles.rate)}>
              <RateIcon className={cn(styles.filledRate)} />
              <RateIcon className={cn(styles.filledRate)} />
              <RateIcon />
            </div>
          </div>
        </Card>
        <Card color={"white"} className={cn(styles.salary)}>
          <div>
            <div className={cn(styles.cardTitle)}>Профессионал</div>
            <div className={cn(styles.salaryDesc)}>
              {formatPrice(page?.hh?.seniorSalary)}
            </div>
            <div className={cn(styles.rate)}>
              <RateIcon className={cn(styles.filledRate)} />
              <RateIcon className={cn(styles.filledRate)} />
              <RateIcon className={cn(styles.filledRate)} />
            </div>
          </div>
        </Card>
      </div>
      <HTag tag={H_TAG_VARIANT.h2}>Преимущества</HTag>
      <div className={cn(styles.advantagesWrapper)}>
        {page.advantages &&
          page.advantages.map((a) => (
            <div key={a._id} className={cn(styles.advantage)}>
              <CheckIcon />
              <div className={cn(styles.advantageTitle)}>{a.title}</div>
              <div className={cn(styles.vline)} />
              <div className={cn(styles.description)}>{a.description}</div>
            </div>
          ))}
      </div>
      {
        <div className={cn(styles.seoText)} dangerouslySetInnerHTML={{__html:page.seoText}} />
        }

        <HTag tag={H_TAG_VARIANT.h2}>Получаемые навыки</HTag>
        {
          page.tags.map((t) => (
            <Tag key={t} size={TAG_SIZE.SMALL} variant={TAG_VARIANT.PRIMARY}>
             {t}
            </Tag>
          ))
        }
    </div>
  );
}
