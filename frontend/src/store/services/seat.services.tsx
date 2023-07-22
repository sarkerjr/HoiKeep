import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const seatApi = createApi({
  reducerPath: "seat",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Seats"],
  endpoints: (builder) => ({
    readSeats: builder.query<any, void>({
      query: () => "/admin/seat",
      providesTags: ["Seats"],
    }),

    readSeat: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/seat/${body.id}` }),
    }),

    createSeat: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: "admin/seat",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Seats"],
    }),

    updateSeat: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: `admin/seat/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Seats"],
    }),

    deleteSeat: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: `admin/seat/${body.id}`,
        method: "DELETE",
        body: body,
      }),
      invalidatesTags: ["Seats"],
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
