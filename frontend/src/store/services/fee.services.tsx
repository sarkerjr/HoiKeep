import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const feeApi = createApi({
  reducerPath: 'fee',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Fees'],
  endpoints: (builder) => ({
    readFees: builder.query<any, void>({
      query: () => '/admin/fee',
      providesTags: ['Fees'],
    }),

    readFee: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/fee/${body.id}` }),
    }),

    readDues: builder.query<any, void>({
      query: () => '/admin/fee/due',
      providesTags: ['Fees'],
    }),

    createFee: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/fee',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Fees'],
    }),

    updateFee: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/fee',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Fees'],
    }),

    deleteFee: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/fee',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Fees'],
    }),
  }),
});

export const {
  useReadFeesQuery,
  useReadFeeQuery,
  useReadDuesQuery,
  useCreateFeeMutation,
  useUpdateFeeMutation,
  useDeleteFeeMutation,
} = feeApi;
