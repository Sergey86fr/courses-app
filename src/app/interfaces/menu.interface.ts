import { JSX } from "react";
import { MENU_CATEGORY } from "../enum/menu-category.enum";

export interface IMenuItem {
  _id: {
    secondCategory: string;
  }
  pages: IPageItem[];
  isOpened?: boolean;
}



export interface IPageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: MENU_CATEGORY;
}