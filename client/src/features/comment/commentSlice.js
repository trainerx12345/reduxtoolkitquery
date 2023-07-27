import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentItems: localStorage.getItem('comments')
    ? JSON.parse(localStorage.getItem('comments'))
    : [],
  commentsCount: 0,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    //Add comments
    addComment: (state, action) => {
      let eachCommentIndex = state.commentItems.findIndex((item) => item?.product?._id === action.payload?.product?._id);
      if (eachCommentIndex >= 0) {
        console.log(state.action.payload);
        state.commentItems[eachCommentIndex].count += 1;
        console.log('plus 1');
      } else {
        console.log('plus 2');
        let newComment;

        //more than 2 coments
        if (action.payload.count > 1) {
          newComment = {
            ...action.payload,
            count: action.payload.count,
          };
          state.commentItems.push(newComment);
        } else if(action.payload.count === 1){
          newComment = { ...action.payload, count: 1 };
          state.commentItems.push(newComment);
        }

        //Store the commnets from the previous
        localStorage.setItem('comments', JSON.stringify(state.commentItems));
        console.log(newComment, 'comment');
      }
      // state[action.payload.postId] = action.payload.comment;
    },
    //Delete comments
    deleteComment: (state, action) => {
      const updateCommentItems = state.commentItems.filter(
        (item) => item?.posts?.id !== action.payload?.comment?.post?.id
      );
      state.commentItems = updateCommentItems;
      localStorage.setItem('comments', JSON.stringify(state.commentItems));
    },
    //Update comments
    updateComment: (state, action) => {
      state[action.payload.postId] = action.payload.comment;
    },

    //Clear comments
    clearComment: (state, action) => {
      state.comments = [];
      localStorage.setItem('comments', JSON.stringify(state.commentItems));
    },
  },
});
export const { addComment, deleteComment, updateComment, clearComment } =
  commentSlice.actions;
export default commentSlice.reducer;
