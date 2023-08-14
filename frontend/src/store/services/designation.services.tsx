import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const designationApi = createApi({
  reducerPath: 'designation',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Designations'],
  endpoints: (builder) => ({
    readDesignations: builder.query<any, void>({
      query: () => '/admin/designation',
      providesTags: ['Designations'],
    }),

    readDesignation: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/designation/${body.id}` }),
    }),

    createDesignation: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/designation',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Designations'],
    }),

    updateDesignation: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/designation',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Designations'],
    }),

    deleteDesignation: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/designation',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Designations'],
    }),
  }),
});

export const {
  useReadDesignationsQuery,
  useReadDesignationQuery,
  useCreateDesignationMutation,
  useUpdateDesignationMutation,
  useDeleteDesignationMutation,
} = designationApi;
