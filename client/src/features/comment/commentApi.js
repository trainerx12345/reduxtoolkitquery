import { rootApi } from '../api/rootApi';

export const commentApi = rootApi.injectEndpoints({
  //Post Endpoints
  endpoints: (builder) => ({
    fetchAllComments: builder.query({
      query: () => '/comments/getallcommentss',
      keepUnusedDataFor: 30,
      providesTags: ['Post'],
    }),
    createCommnets: builder.mutation({
      query: (data) => ({
        url: '/comments/creatComment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),
    getCommentById: builder.query({
      query: (id) => `/posts/getPost/${id}`,
      keepUnusedDataFor: 30,
      providesTags: ['Post'],
    }),
  }),
});
export const {
  useFetchAllCommentaQuery,
  useCreateCommentMutation,
  useGetCommentByIdQuery,
} = commentApi;
