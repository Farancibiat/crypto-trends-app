import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Trend } from "./types";

// const token: string = ;

export const trendsApi = createApi({
  reducerPath: "trendsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://data.messari.io/api/v2/",
    // prepareHeaders: (headers) => {
    //   headers.set("Authorization", `Bearer ckey_7f2af84402c5492c86e6b80e64d`);
    //   headers.set("Content-Type", "application/json");
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    useTrendingCryptos: builder.query<any, { page: number }>({
      query: (arg) => {
        const { page } = arg;
        return {
          url: "/assets",
          method: "GET",
          params: {
            page: page,
            limit: 10,
            fields: "id,symbol,metrics",
          },
        };
      },
    }),
  }),
});
