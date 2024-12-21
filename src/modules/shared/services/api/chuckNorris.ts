/** LIBRARIES */
import i18next from "i18next";

/** MODELS */
import { type UrlParam } from "@shared/models/api";

/** OTHER */
import { appendUrlParams } from "@shared/utils/helper";

export const getData = async (url: string, param?: UrlParam) => {
  const parsedUrl = param ? appendUrlParams(url, param) : url;
  const response = await fetch(parsedUrl);

  if (!response.ok) {
    const message = i18next.t("modules.error.message.dataFetch");
    throw {
      status: response.status,
      message,
    };
  }

  return await response.json();
};
