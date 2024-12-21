/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import { Category, type ICategoriesState } from "@categories/models/store";

/** OTHER */
import { INITIAL_PAGE } from "@shared/utils/constants";

const initialState: ICategoriesState = {
  categories: [],
  currentCategory: Category.ALL,
  currentPage: INITIAL_PAGE,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<Category>) => ({
      ...state,
      currentCategory: payload,
    }),
    setCategories: (state, { payload }: PayloadAction<Category[]>) => ({
      ...state,
      categories: payload,
    }),
    setCurrentPage: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      currentPage: payload,
    }),
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
