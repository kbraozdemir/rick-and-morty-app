import { configureStore } from "@reduxjs/toolkit";
import charSliceReducer from "./charSlice";

export const store = configureStore({
  reducer: {
    characters: charSliceReducer,
  },
});

export default store;