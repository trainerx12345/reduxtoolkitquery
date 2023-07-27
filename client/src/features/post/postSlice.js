import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postItems: localStorage.getItem('posts')
    ? JSON.parse(localStorage.getItem('posts'))
    : [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
});
export default postSlice.reducer;
