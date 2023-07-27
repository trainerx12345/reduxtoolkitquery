import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '../features/post/postApi';
import {commentApi} from '../features/comment/commentApi'; 

import postSlice from '../features/post/postSlice';
import commentSlice from '../features/comment/commentSlice';
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    post: postSlice,
    comments: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware).concat(commentApi.middleware),
});
