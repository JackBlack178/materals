import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "@utils/reducer.ts";
import { userSchema } from "@models/user/schema.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<any, string>({
      query: (userId) => `${baseUrl}/users/${userId}`,
      transformResponse: (response) => {
        return userSchema.parse(response);
      },
      providesTags: ["User"],
    }),
    changeFavoriteState: builder.mutation<
      void,
      { userId: string; newState: string[]; productId: string }
    >({
      query: ({ userId, newState }) => ({
        url: `${baseUrl}/users/${userId}`,
        method: "PATCH",
        body: {
          favorites: newState,
        },
      }),
      invalidatesTags: ["User"],
    }),
    changeGroceryState: builder.mutation<
      void,
      { userId: string; newState: string[]; productId: string }
    >({
      query: ({ userId, newState }) => ({
        url: `${baseUrl}/users/${userId}`,
        method: "PATCH",
        body: {
          groceryBasket: newState,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

rootReducer.inject(userApi);
