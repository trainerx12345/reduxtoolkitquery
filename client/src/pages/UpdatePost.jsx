import React from 'react';
import PostForm from '../components/PostForm';
import { useSelector, useDispatch } from 'react-redux';
// import { clearComment } from '../features/comment/commentSlice';
import { Link } from 'react-router-dom';
const UpdatePost = () => {
  const { postItems } = useSelector((state) => state?.post);
  // const dispatch = useDispatch();
  // const emptyCommentHandler = () => {
  //   dispatch(clearComment());
  // };
  // console.log(postItems);
  return (
    <div>
      {/* <button onClick={emptyCommentHandler}>Empty Comment</button> */}
      <Link to="/">Back</Link>
      <div>UpdatePost</div>

      {postItems.map((post, index) => {
        return <PostForm key={index} post={post} />;
      })}
    </div>
  );
};

export default UpdatePost;
