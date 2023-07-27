import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../features/post/postApi';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/comment/commentSlice';

const PreviewPostPage = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    isError,
    isSuccess,
  } = useGetPostByIdQuery(id) || {};
  if (isError) {
  }
  if (isSuccess) {
  }
  if (isLoading) {
  }
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const addCommentHandler = (post) => {
    console.log(post);
    dispatch(addComment({ post, count: Number(qty) }));
  };
  return (
    <>
      {isSuccess && (
        <div>
          <div>Post id : {id}</div>
          <div>Post title : {post.title}</div>
          <div>Post postText : {post.postText}</div>
          <div>Post username : {post.username}</div>
          <input
            type="number"
            onChange={(e) => setQty(e.target.value)}
            value={qty}
          />
          <button onClick={() => addCommentHandler(post)}>Add Comment</button>
        </div>
      )}
    </>
  );
};

export default PreviewPostPage;
