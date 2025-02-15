import { ILayoutProps } from "./layout.type";
import styles from "./layout.module.css";
import cn from "classnames";
import { SideBar } from "./sideBar/sideBar";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";


export function Layout({ children }: ILayoutProps) {
  return (
    <div className={cn(styles.wrapper)}>
      <Header className={cn(styles.header)} />
      <SideBar className={cn(styles.sidebar)}/>
      <div className={cn(styles.body)}>{children}</div>
      <Footer className={cn(styles.footer)}/>
    </div>
  );
}

// export const withLayout = <T extends Record<string, unknown>>(
//   Component: FunctionComponent<T>
// ) => {
//   return function withLayoutComponent(props: T): JSX.Element {
//     return (
//       <Layout>
//         <Component {...props} />
//       </Layout>
//     );
//   };
// };
