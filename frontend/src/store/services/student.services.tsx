import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "student",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Students"],
  endpoints: (builder) => ({
    readStudents: builder.query<any, void>({
      query: () => "/admin/studentt",
      providesTags: ["Students"],
    }),

    readStudent: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/student/${body.id}` }),
    }),

    createStudent: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: "admin/student",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Students"],
    }),

    updateStudent: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: `admin/student/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Students"],
    }),

    deleteStudent: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: `admin/student/${body.id}`,
        method: "DELETE",
        body: body,
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useReadStudentsQuery,
  useReadStudentQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;