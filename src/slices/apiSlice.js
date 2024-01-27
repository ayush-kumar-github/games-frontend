import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { logout } from "./authSlice";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}
// async function baseQueryWithAuth(args, api, extra) {
//   // Retrieve the JWT token from the cookie
//   const token = Cookies.get("jwt");
//   console.log(token);
//   const result = await baseQuery(
//     {
//       ...args,
//       headers: {
//         Authorization: token ? `Bearer ${token}` : undefined,
//         ...args.headers,
//       },
//     },
//     api,
//     extra
//   );

//   if (result.error && result.error.status === 401) {
//     // Handle unauthorized access, e.g., dispatch logout action
//     api.dispatch(logout());
//   }

//   return result;
// }
export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
