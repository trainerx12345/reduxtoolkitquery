import { rootApi } from '../api/rootApi';
import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";


const postsAdapter = createEntityAdapter({});
//   {
//   sortComparer: (a, b) => b.id.sortComparer(a.id)
// })
const initialState = postsAdapter.getInitialState()

export const postApi = rootApi.injectEndpoints({
  //Post Endpoints
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query: () => '/posts/getallposts',
      keepUnusedDataFor: 30,
      providesTags: ['Post'],
      transformResponse: responseData => {
        return postsAdapter.setAll(initialState, responseData)
      },
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts/createPost',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Post'],
    }),
    getPostById: builder.query({
      query: (id) => `/posts/getPost/${id}`,
      keepUnusedDataFor: 30,
      providesTags: ['Post'],
    }),
    editPost: builder.mutation({
      query: (data) => ({
        url: `/editPost/${data.id}`,
        method: `PATCH`,
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }]
    })
  }),
});
export const {
  useFetchAllPostsQuery,
  useCreatePostMutation,
  useGetPostByIdQuery,
  useEditPostMutation,
} = postApi;

// returns the query result object
export const selectPostsResult = postApi.endpoints.fetchAllPosts.select()

// Creates memoized selector
const selectPostsData = createSelector(
  selectPostsResult,
  postsResult => postsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectAllData,
  selectTotal:selectAllTotal
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState)