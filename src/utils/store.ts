import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@utils/reducer.ts";
import { productApi } from "@models/product/productApi.ts";
import { materialApi } from "@models/materials/materialApi.ts";

export const store = configureStore({
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      materialApi.middleware,
    ),
});
