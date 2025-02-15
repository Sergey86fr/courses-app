"use client";

import styles from "./sideBar.module.css";
import cn from "classnames";
import SearchIcon from "./search.svg";
import HatIcon from "./hat.svg";
import CloudIcon from "./cloud.svg";
import BookIcon from "./book.svg";

import CubeIcon from "./cube.svg";
import { H_TAG_VARIANT, HTag } from "../../components";
import React, { useState } from "react";
import Link from "next/link";
import { ISideBarProps } from "./sideBar.type";

export function SideBar({className,...props}:ISideBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const handleDropDownMenu = (menuName: string) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
    setActiveSubDropdown(null);
  };

  const handleSubDropDownMenu = (subMenuName: string) => {
    setActiveSubDropdown((prev) => (prev === subMenuName ? null : subMenuName));
  };


  return (
    <div {...props} className={cn(className, styles.sideBar)}>
      <Link href="/">
      <h1 className={cn(styles.logoTitle)}>IBRAIN</h1>
      </Link>
      <div className={cn(styles.inputWrapper)}>
        <input
          className={cn(styles.inputSearch)}
          placeholder="Поиск..."
          type="text"
        />
        <span className={cn(styles.searchIcon)}>
          <SearchIcon />
        </span>
      </div>
      <ul className={cn(styles.menuList)} >
        <li onClick={() => handleDropDownMenu("Курсы")} className={cn(styles.itemSideBar)}
        >
          <HatIcon />
          <HTag className={cn(styles.itemTitle, {
          [styles.active]: activeDropdown === "Курсы",})} tag={H_TAG_VARIANT.h4}>Курсы</HTag>
        </li>
        {activeDropdown === "Курсы" && (
          <div className={cn(styles.dropDownMenu)}>
            <ul  className={cn(styles.subMenu)}>
              {["Дизайн", "Разработка", "Аналитика", "Маркетинг"].map(
                (item) => (
                  <li onClick={() => handleSubDropDownMenu(item)} key={item} className={cn(styles.subMenuItem,{
                    [styles.active]: activeSubDropdown === item})}
                  >
                    {item}

                    {activeSubDropdown === item && (
                     
                      <ul className={cn(styles.secondLevelMenu)}>
                     {["Photoshop", "AffterEffect", "Figma", "Illustrator"].map((subItem) => (
                     
                        <li key={subItem} className={cn(styles.secondLevelItem)}>
                          <Link className={cn(styles.link)} href={`/${subItem.toLowerCase()}`}>
                          {subItem}
                          </Link>
                        </li>
                      
                      ))}
                      </ul>
                    )}

                  </li>
                )
              )}
            </ul>
          </div>
        )}
            {/* <div className={cn(styles.dropDownMenu, { */}
            {/* [styles.open]: isActive === true */}
            {  /* })}> */}
            {/* <div  style={{opacity:"1",overflow:"hidden"}}> */}
            {/* <ul style={{ borderLeft: "1px solid orange", marginLeft: "10px" }}> */}
            {/* <li style={{ marginLeft: "10px" }}>Дизайн</li> */}
            {/* <li style={{ marginLeft: "10px" }}>Photoshop</li> */}
            {/* <li style={{ marginLeft: "10px" }}>AfterEffect</li> */}
            {/* <li style={{ marginLeft: "10px" }}>Illustrator</li> */}
            {/* <li style={{ marginLeft: "10px" }}>Figma</li> */}
            {/* </ul> */}
            {/* </div> */}
            <li onClick={() => handleDropDownMenu("Сервисы")} className={cn(styles.itemSideBar)}>
              <CloudIcon />
              <HTag className={cn(styles.itemTitle, {
          [styles.active]: activeDropdown === "Сервисы",})} tag={H_TAG_VARIANT.h4}>Сервисы</HTag>
            </li>
            {activeDropdown === "Сервисы" && (
          <div className={cn(styles.dropDownMenu)}>
            <ul  className={cn(styles.subMenu)}>
              {["Дизайн", "Photoshop", "AfterEffect", "Illustrator", "Figma"].map(
                (item) => (
                  <li key={item} className={cn(styles.subMenuItem)}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
            <li onClick={() => handleDropDownMenu("Книги")} className={cn(styles.itemSideBar)}>
              <BookIcon />
              <HTag className={cn(styles.itemTitle, {
          [styles.active]: activeDropdown === "Книги",})} tag={H_TAG_VARIANT.h4}>Книги</HTag>
            </li>
            {activeDropdown === "Книги" && (
          <div className={cn(styles.dropDownMenu)}>
            <ul  className={cn(styles.subMenu)}>
              {["Дизайн", "Photoshop", "AfterEffect", "Illustrator", "Figma"].map(
                (item) => (
                  <li  key={item} className={cn(styles.subMenuItem)}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
            <li onClick={() => handleDropDownMenu("Товары")} className={cn(styles.itemSideBar)}>
              <CubeIcon />
              <HTag className={cn(styles.itemTitle, {
          [styles.active]: activeDropdown === "Товары",})} tag={H_TAG_VARIANT.h4}>Товары</HTag>
            </li>
            {activeDropdown === "Товары" && (
          <div className={cn(styles.dropDownMenu)}>
            <ul  className={cn(styles.subMenu)}>
              {["Дизайн", "Photoshop", "AfterEffect", "Illustrator", "Figma"].map(
                (item) => (
                  <li key={item} className={cn(styles.subMenuItem)}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
</ul>
    </div>
  );
}



