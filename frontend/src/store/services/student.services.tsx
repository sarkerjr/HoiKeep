import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const studentApi = createApi({
  reducerPath: 'student',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    readStudents: builder.query<any, void>({
      query: () => '/admin/student',
      providesTags: ['Students'],
    }),

    readStudentsWithAccommodationStatus: builder.query<any, void>({
      query: () => '/admin/student/accommodation',
      providesTags: ['Students'],
    }),

    readStudent: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/student/${body.id}` }),
    }),

    createStudent: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/student',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Students'],
    }),

    updateStudent: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/student',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Students'],
    }),

    deleteStudent: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/student',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const {
  useReadStudentsQuery,
  useReadStudentsWithAccommodationStatusQuery,
  useReadStudentQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
