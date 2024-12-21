/** CUSTOM COMPONENTS */
import { categoriesUrl } from "@categories/index";

/** LIBRARIES */
import { type LoaderFunction } from "react-router";

/** SERVICES */
import { getData } from "@shared/services/api/chuckNorris";

export const loader: LoaderFunction = async () => {
    return getData(categoriesUrl);
  };
