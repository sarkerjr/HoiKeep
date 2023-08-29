import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithToken } from '../utils';

export const dashboardApi = createApi({
  reducerPath: 'dashboard',
  baseQuery: baseQueryWithToken,
  endpoints: (builder) => ({
    readDashboardData: builder.query<any, void>({
      query: () => '/admin/dashboard',
    }),
  }),
});

export const { useReadDashboardDataQuery } = dashboardApi;
