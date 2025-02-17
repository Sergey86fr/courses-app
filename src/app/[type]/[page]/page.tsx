import { TopPageComponent } from "@/app/components/top-page-component/top-page-component";
import { MENU_CATEGORY } from "@/app/enum/menu-category.enum";
import { firstLevelMenu } from "@/app/helper/menu.helper";
import { IMenuItem } from "@/app/interfaces/menu.interface";
import { IPage } from "@/app/interfaces/page.interface";
import { IProduct } from "@/app/interfaces/product.interface";
import axios from "axios";
import { notFound } from "next/navigation";

interface IParams {
  params: {
    type: string;
    page: string;
  };
}

const firstCategory = 0;

export default async function TopPage(params: IParams) {
  const { pageData,  products, firstCategory } = await getMenuItem(params);
  return (
     <TopPageComponent 
     page={pageData}
     products={products}
     firstCategory={firstCategory ?? MENU_CATEGORY.COURSES}
     />
  );
}

export async function generateStaticParams() {
  const paths = [];
  for (const fm of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`,
      { firstCategory }
    );
    paths.push(
      ...menu
        .flatMap((m) => m.pages)
        .map((p) => {
          return {
            [fm.route]: p.alias,
          };
        })
    );
  }
  return paths;
}

export async function generateMetadata(params: IParams) {
  const menu = await getMenuItem(params);
  return {
    title: menu?.pageData.title,
  };
}

export const getMenuItem = async ({ params }: IParams) => {
  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`,
      { firstCategory: firstCategoryItem?.id }
    );

    const { data: pageData } = await axios<IPage>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/byAlias/${params.page}`
    );

    const { data: products } = await axios.post<IProduct[]>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}product/find`,
      { category: pageData.category, limit: 10 }
    );
    return {
      menu,
      pageData,
      products,
      firstCategory: firstCategoryItem?.id
    };
  } catch {
    notFound();
  }
};
