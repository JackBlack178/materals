import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "@utils/reducer.ts";
import { userSchema } from "@models/user/schema.ts";
import { store } from "@utils/store.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "userApi",
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query<any, string>({
      query: (userId) => `${baseUrl}/users/${userId}`,
      transformResponse: (response) => {
        return userSchema.parse(response);
      },
    }),
  }),
});

rootReducer.inject(userApi);
