import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const departmentApi = createApi({
  reducerPath: 'department',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Departments'],
  endpoints: (builder) => ({
    readDepartments: builder.query<any, void>({
      query: () => '/admin/department',
      providesTags: ['Departments'],
    }),

    readDepartment: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/department/${body.id}` }),
    }),

    createDepartment: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: `admin/department`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Departments'],
    }),

    updateDepartment: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/department',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Departments'],
    }),

    deleteDepartment: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/department',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Departments'],
    }),
  }),
});

export const {
  useReadDepartmentsQuery,
  useReadDepartmentQuery,
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
