// import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // import { createApi, fetchBaseQueary } from "@reduxjs/toolkit/query/react";

// export const productsApi=createApi({
//     reducerPath:"productsApi",
//     baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000"}),
//     endpoints:(builder)=>({
//         getAllProducts: builder.query({
//             query:()=>"products"
//         }),
//     }),
// });

// export const {useGetAllProductsQuery}=productsApi


// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (id) => `products`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsApi;