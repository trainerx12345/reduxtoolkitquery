import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from '../components/Comment';
import { clearComment } from '../features/comment/commentSlice';
import { Link } from 'react-router-dom';
const CommentPage = () => {
  const { commentItems } = useSelector((state) => state?.comments);
  const dispatch = useDispatch();
  const emptyCommentHandler = () => {
    dispatch(clearComment());
  };
  console.log(commentItems);
  return (
    <div>
      <button onClick={emptyCommentHandler}>Empty Comment</button>
      <Link to="/">Back</Link>
      <div>CommentPage</div>

      {commentItems.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};

export default CommentPage;
