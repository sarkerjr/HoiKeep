import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const staffApi = createApi({
  reducerPath: 'staff',
  baseQuery: baseQueryWithToken,
  tagTypes: ['Staffs'],
  endpoints: (builder) => ({
    readStaffs: builder.query<any, void>({
      query: () => '/admin/staff',
      providesTags: ['Staffs'],
    }),

    readStaff: builder.query<any, Partial<any>>({
      query: (body) => ({ url: `admin/staff/${body.id}` }),
    }),

    createStaff: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/staff',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Staffs'],
    }),

    updateStaff: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/staff',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Staffs'],
    }),

    deleteStaff: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: 'admin/staff',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['Staffs'],
    }),
  }),
});

export const {
  useReadStaffsQuery,
  useReadStaffQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,
} = staffApi;
