/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import { type IJoke, type IHomeState } from "@home/models/store";

const initialState: IHomeState = {
  currentJoke: null,
  searchedText: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setJoke: (state, { payload }: PayloadAction<IJoke | null>) => ({
      ...state,
      currentJoke: payload,
    }),
    setSearchedText: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      searchedText: payload,
    }),
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
