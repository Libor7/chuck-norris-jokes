/** CUSTOM COMPONENTS */
import { randomJokeUrl } from "@home/index";

/** LIBRARIES */
import { type LoaderFunction } from "react-router";

/** SERVICES */
import { getData } from "@shared/services/api/chuckNorris";

export const loader: LoaderFunction = async () => {
  return getData(randomJokeUrl);
};
