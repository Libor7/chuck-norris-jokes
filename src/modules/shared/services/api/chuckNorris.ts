/** MODELS */
import { type UrlParam } from "@shared/models/api";

/** OTHER */
import { CONTENT } from "@shared/utils/content";
import { appendUrlParams } from "@shared/utils/helper";

export const getData = async (url: string, param?: UrlParam) => {
  const parsedUrl = param ? appendUrlParams(url, param) : url;
  const response = await fetch(parsedUrl);

  if (!response.ok) {
    throw {
      status: response.status,
      message: CONTENT.ERROR.MESSAGE.DATA_FETCH,
    };
  }

  return await response.json();
};
