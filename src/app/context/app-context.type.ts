import { MENU_CATEGORY } from "../enum/menu-category.enum";
import { IMenuItem } from "../interfaces/menu.interface";

export interface IAppContext {
     firstCategory: MENU_CATEGORY;
     menu: IMenuItem[];
     setMenu?: (newMenu: IMenuItem[]) => void;
}