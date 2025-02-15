import { MENU_CATEGORY } from "@/app/enum/menu-category.enum";

import HatIcon from "../layout/menu/hat.svg";
import CloudIcon from "../layout/menu/cloud.svg";
import BookIcon from "../layout/menu/book.svg";
import CubeIcon from "../layout/menu/cube.svg";
import { IFirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <HatIcon />,
    id: MENU_CATEGORY.COURSES,
  },
  {
    route: "servises",
    name: "Сервисы",
    icon: <CloudIcon />,
    id: MENU_CATEGORY.SERVISES,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: MENU_CATEGORY.BOOKS,
  },
  {
    route: "products",
    name: "Товары",
    icon: <CubeIcon />,
    id: MENU_CATEGORY.PRODUCTS,
  },
];