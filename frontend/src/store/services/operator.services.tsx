import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const operatorApi = createApi({
  reducerPath: 'operator',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Operators'],
  endpoints: (builder) => ({
    readOperators: builder.query<any, void>({
      query: () => '/admin/operator',
      providesTags: ['Operators'],
    }),

    readOperator: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/operator/${body.id}` }),
    }),

    createOperator: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/operator',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Operators'],
    }),

    updateOperator: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/operator',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Operators'],
    }),

    deleteOperator: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/operator',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Operators'],
    }),
  }),
});

export const {
  useReadOperatorsQuery,
  useReadOperatorQuery,
  useCreateOperatorMutation,
  useUpdateOperatorMutation,
  useDeleteOperatorMutation,
} = operatorApi;
