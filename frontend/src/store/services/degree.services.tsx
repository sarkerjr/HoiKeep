import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const degreeApi = createApi({
  reducerPath: 'degree',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ['Degrees'],
  endpoints: (builder) => ({
    readDegrees: builder.query<any, void>({
      query: () => '/admin/degree',
      providesTags: ['Degrees'],
    }),

    readDegree: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/degree/${body.id}` }),
    }),

    createDegree: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/degree',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Degrees'],
    }),

    updateDegree: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/degree',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Degrees'],
    }),

    deleteDegree: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/degree',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Degrees'],
    }),
  }),
});

export const {
  useReadDegreesQuery,
  useReadDegreeQuery,
  useCreateDegreeMutation,
  useUpdateDegreeMutation,
  useDeleteDegreeMutation,
} = degreeApi;
