import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { trendsApi } from "../services/trends";

export const store = configureStore({
  reducer: {
    [trendsApi.reducerPath]: trendsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trendsApi.middleware),
});

setupListeners(store.dispatch);
