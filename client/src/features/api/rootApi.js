//RTC QUERY ENDPOINTS
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const rootApi = createApi({
  reducerPath: 'api',
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3700/api',
  }),
  endpoints: (builder) => ({}),
});
