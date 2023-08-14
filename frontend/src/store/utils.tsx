import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
});

export const baseQueryWithToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Get the access token from local storage
  const accessToken = localStorage.getItem('accessToken');

  // Add the access token to the request headers
  if (typeof args === 'string') {
    return await baseQuery(
      {
        url: args,
        headers: {
          Authorization: accessToken ?? undefined,
        },
      },
      api,
      extraOptions
    );
  } else {
    return await baseQuery(
      {
        ...args,
        headers: {
          ...args.headers,
          Authorization: accessToken ?? undefined,
        },
      },
      api,
      extraOptions
    );
  }
};
