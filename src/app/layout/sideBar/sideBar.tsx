import { Menu } from "../menu/menu";
import styles from "./sideBar.module.css";
import cn from "classnames";
import { ISideBarProps } from "./sideBar.type";
import Link from "next/link";
import { Search } from "@/app/components";

export function SideBar({ className, ...props }: ISideBarProps) {
  return (
    <div {...props} className={cn(className, styles.sideBar)}>
           <Link href="/">
      <h1 className={cn(styles.logoTitle)}>IBRAIN</h1>
      </Link>
       <Search />
      <Menu />
    </div>
  );
}
