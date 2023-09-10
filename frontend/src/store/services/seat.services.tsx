import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const seatApi = createApi({
  reducerPath: 'seat',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Seats'],
  endpoints: (builder) => ({
    readSeats: builder.query<any, void>({
      query: () => '/admin/seat',
      providesTags: ['Seats'],
    }),

    readSeat: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/seat/${body.id}` }),
      providesTags: ['Seats'],
    }),

    createSeat: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/seat',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Seats'],
    }),

    updateSeat: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/seat',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Seats'],
    }),

    deleteSeat: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/seat',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Seats'],
    }),
  }),
});

export const {
  useReadSeatsQuery,
  useReadSeatQuery,
  useCreateSeatMutation,
  useUpdateSeatMutation,
  useDeleteSeatMutation,
} = seatApi;
