import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productArraySchema } from "@models/product/schema.ts";
import { rootReducer } from "@utils/reducer.ts";
import { Product } from "@models/product/types.ts";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "productApi",
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, string>({
      query: (categoryId) => `${baseUrl}/category/${categoryId}`,
      transformResponse: (response: { items: Product[] }) => {
        return productArraySchema.parse(response.items);
      },
    }),
  }),
});

rootReducer.inject(productApi);
