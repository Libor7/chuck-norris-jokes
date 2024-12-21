/** CUSTOM COMPONENTS */
import CategoriesContent from "@categories/components/CategoriesContent";

/** LIBRARIES */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router";

/** MODELS */
import { Category } from "./models/store";

/** OTHER */
import { categoriesActions } from "@categories/store/categories";
import { PATHS } from "@shared/utils/constants";
import { type RootState, useAppDispatch } from "@shared/store";

export const categoriesUrl = `${import.meta.env.VITE_DOMAIN}${PATHS.JOKES}${PATHS.CATEGORIES}`;

const CategoriesPage = () => {
  const appDispatch = useAppDispatch();
  const data = useLoaderData<Category[]>();
  const { categories } = useSelector(({ categories }: RootState) => categories);

  useEffect(() => {
    if (data) appDispatch(categoriesActions.setCategories(data));
  }, [appDispatch, data]);

  return <CategoriesContent items={categories} />;
};

export default CategoriesPage;
