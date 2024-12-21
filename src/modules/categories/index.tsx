/** CUSTOM COMPONENTS */
import CategoriesContent from "@categories/components/CategoriesContent";

/** LIBRARIES */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { type LoaderFunction, useLoaderData } from "react-router";

/** MODELS */
import { Category } from "./models/store";

/** OTHER */
import { categoriesActions } from "@categories/store/categories";
import { DOMAIN, PATHS } from "@shared/utils/constants";
import { type RootState, useAppDispatch } from "@shared/store";

/** SERVICES */
import { getData } from "@shared/services/api/chuckNorris";

const categoriesUrl = `${DOMAIN}${PATHS.JOKES}${PATHS.CATEGORIES}`;

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

export const loader: LoaderFunction = async () => {
  return getData(categoriesUrl);
};
