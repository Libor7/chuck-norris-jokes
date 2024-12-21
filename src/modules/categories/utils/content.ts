/** MODELS */
import { Category } from "@categories/models/store";

/** OTHER */ 
import { categoryTextOptions } from "@shared/utils/constants";
import { getRandomArrayItem } from "@shared/utils/helper";

export const CONTENT = {
  HEADING: "Categories",
  TEXT: {
    CATEGORY_SELECTED: (category: Category) =>
      `${getRandomArrayItem(categoryTextOptions)} the ${category} theme`,
    HINT: "Select a category of Jokes to narrow down the topic",
    RESET_BTN_LABEL: "Deselect",
  },
};

Object.freeze(CONTENT);
