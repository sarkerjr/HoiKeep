import {
  createApi,
  BaseQueryFn,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import axios from '@/utils/axios';
import { setSession, login, getUserRole } from '@/store/slices/auth.slice';

interface LoginResponse {
  accessToken: string;
}

// RTK Query API
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      LoginResponse,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        data: { email, password },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (data.accessToken) {
          setSession(data.accessToken);
          dispatch(
            login({
              role: getUserRole(data.accessToken),
            })
          );
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
