import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const roomApi = createApi({
  reducerPath: 'room',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Rooms'],
  endpoints: (builder) => ({
    readRooms: builder.query<any, void>({
      query: () => '/admin/room',
      providesTags: ['Rooms'],
    }),

    readRoom: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/room/${body.id}` }),
    }),

    createRoom: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/room',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Rooms'],
    }),

    updateRoom: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/room',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Rooms'],
    }),

    deleteRoom: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/room',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Rooms'],
    }),
  }),
});

export const {
  useReadRoomsQuery,
  useReadRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
