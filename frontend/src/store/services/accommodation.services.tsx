import { createApi } from '@reduxjs/toolkit/query/react';

import { seatApi } from './seat.services';
import { baseQueryWithToken } from '../utils';

export const accommodationApi = createApi({
  reducerPath: 'accommodation',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Accommodations'],
  endpoints: (builder) => ({
    readAccommodations: builder.query<any, void>({
      query: () => '/admin/accommodation',
      providesTags: ['Accommodations'],
    }),

    readAccommodation: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/accommodation/${body.id}` }),
    }),

    createAccommodation: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/accommodation',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Accommodations'],
      onCacheEntryAdded: (_, { dispatch }) => {
        dispatch(seatApi.util.invalidateTags(['Seats']));
      },
    }),

    updateAccommodation: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/accommodation',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Accommodations'],
      onCacheEntryAdded: (_, { dispatch }) => {
        dispatch(seatApi.util.invalidateTags(['Seats']));
      },
    }),

    deleteAccommodation: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/accommodation',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Accommodations'],
      onCacheEntryAdded: (_, { dispatch }) => {
        dispatch(seatApi.util.invalidateTags(['Seats']));
      },
    }),
  }),
});

export const {
  useReadAccommodationsQuery,
  useReadAccommodationQuery,
  useCreateAccommodationMutation,
  useUpdateAccommodationMutation,
  useDeleteAccommodationMutation,
} = accommodationApi;
