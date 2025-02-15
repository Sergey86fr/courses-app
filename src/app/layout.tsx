// import Head from "next/head";
import "./globals.css";
import { Noto_Sans } from "next/font/google"
import { Layout } from "./layout/layout";
import { AppContextProvider } from "./context/app.context";
import axios from "axios";
import { IMenuItem } from "./interfaces/menu.interface";
import { MENU_CATEGORY } from "./enum/menu-category.enum";

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { menu } = await getMenuItem()

  return (
    <html lang="ru" className={noto.className}>
      <body>
        <AppContextProvider menu={menu} firstCategory={MENU_CATEGORY.COURSES}>
        <Layout>
            {children}
        </Layout>
        </AppContextProvider>
      </body>
    </html>
  );


}

export const getMenuItem = async () => {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`,
      { firstCategory: MENU_CATEGORY.COURSES }
    );
    return {
      menu
    }

 };
