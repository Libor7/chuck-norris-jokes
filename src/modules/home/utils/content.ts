/** MODELS */
import { Category } from "@categories/models/store";

export const CONTENT = {
  TEXT: {
    HINT: "Use the search field to generate a new one",
    NO_JOKE_FOUND: (searchedText: string) =>
      `No joke could be found for the string "${searchedText}", please try to enter different text`,
    SEARCH_BTN: {
      LABEL: (currentCategory: Category | null) =>
        `Find ${currentCategory ? currentCategory : "some "} Joke`,
      PLACEHOLDER: "Find by text ... ",
    },
  },
};

Object.freeze(CONTENT);
