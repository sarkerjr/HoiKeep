import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const positionApi = createApi({
  reducerPath: 'position',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ['Positions'],
  endpoints: (builder) => ({
    readPositions: builder.query<any, void>({
      query: () => '/admin/position',
      providesTags: ['Positions'],
    }),

    readPosition: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/position/${body.id}` }),
    }),

    createPosition: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/position',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Positions'],
    }),

    updatePosition: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/position',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Positions'],
    }),

    deletePosition: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/position',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Positions'],
    }),
  }),
});

export const {
  useReadPositionsQuery,
  useReadPositionQuery,
  useCreatePositionMutation,
  useUpdatePositionMutation,
  useDeletePositionMutation,
} = positionApi;
