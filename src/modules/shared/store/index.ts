/** LIBRARIES */
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categoriesReducer from "@categories/store/categories";
import homeReducer from "@home/store/home";
import sharedReducer from "@shared/store/shared";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    home: homeReducer,
    shared: sharedReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
