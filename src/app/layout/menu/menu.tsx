"use client";
import { AppContext } from "@/app/context/app.context";
import { useContext } from "react";
import styles from "./menu.module.css";
import cn from "classnames";
import {
  IFirstLevelMenuItem,
  IMenuItem,
  IPageItem,
} from "@/app/interfaces/menu.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/app/helper/menu.helper";




export function Menu() {
  const pathname = usePathname();
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const openSecondLevelMenu = (secondCategory: string) => {
      const updatedMenu = menu.map((m) => {
        if(m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened
          return m;
        }
        m.isOpened = false;
        return m;
      })
      if (setMenu) setMenu(updatedMenu);
  }

  const buildFirstLevelMenu = () => {
    return (
      <>
        {firstLevelMenu?.map((m: IFirstLevelMenuItem) => {
          const isActive = m.id === firstCategory;
          return (
            <div key={m.id}>
              <div
                className={cn(styles.itemSideBar, {
                  [styles.itemSideBarActive]: isActive,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
              {isActive && buildSecondLevelMenu(m)}
            </div>
          );
        })}
      </>
    );
  };
  const buildSecondLevelMenu = (menuItem: IFirstLevelMenuItem) => {

    return (
      <div className={cn(styles.subMenu)}>
        {menu.map((m: IMenuItem) => {
          const isOpenedMenu = m.pages.map(p => p.alias).includes(pathname.split("/")[2])
          if (isOpenedMenu) m.isOpened = true;
          return (
            <div className={cn(styles.subMenuItem)} key={m._id.secondCategory}>
              <div onClick={() => {openSecondLevelMenu(m._id.secondCategory)}}>{m._id.secondCategory}</div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockActive]: m?.isOpened
              })}>
                {buildThirdLevelMenu(m.pages, menuItem.route)}
                </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: IPageItem[], route: string) => {
    return (
      <div className={cn(styles.secondLevelMenu)}>
        {pages.map((p) => {
          return (
            <Link
              className={cn(styles.secondLevelItem, {
                [styles.secondLevelItemActive]:
                  pathname === `/${route}/${p.alias}`,
              })}
              key={p._id}
              href={`/${route}/${p.alias}`}
            >
              {p.category}
            </Link>
          );
        })}
      </div>
    );
  };

  return <div>{buildFirstLevelMenu()}</div>;
}
