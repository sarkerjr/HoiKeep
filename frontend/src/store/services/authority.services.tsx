import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authorityApi = createApi({
  reducerPath: 'authority',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ['Authorities'],
  endpoints: (builder) => ({
    readAuthorities: builder.query<any, void>({
      query: () => '/admin/authority',
      providesTags: ['Authorities'],
    }),

    readAuthority: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/authority/${body.id}` }),
    }),

    createAuthority: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/authority',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Authorities'],
    }),

    updateAuthority: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/authority',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Authorities'],
    }),

    deleteAuthority: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/authority',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Authorities'],
    }),
  }),
});

export const {
  useReadAuthoritiesQuery,
  useReadAuthorityQuery,
  useCreateAuthorityMutation,
  useUpdateAuthorityMutation,
  useDeleteAuthorityMutation,
} = authorityApi;
