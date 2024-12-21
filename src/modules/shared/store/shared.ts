/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import { type ISharedState } from "@shared/models/store";

const initialState: ISharedState = {
  appBarHeight: 0,
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setAppBarHeight: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      appBarHeight: payload,
    }),
  },
});

export const sharedActions = sharedSlice.actions;

export default sharedSlice.reducer;
