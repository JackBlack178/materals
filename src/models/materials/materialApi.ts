import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "@utils/reducer.ts";
import { materialArraySchema } from "@models/materials/schema.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const materialApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "materialApi",
  tagTypes: ["Materials"],
  endpoints: (builder) => ({
    getMaterials: builder.query<any, void>({
      query: () => `${baseUrl}/materials`,
      transformResponse: (response) => {
        return materialArraySchema.parse(response);
      },
    }),
  }),
});

rootReducer.inject(materialApi);
