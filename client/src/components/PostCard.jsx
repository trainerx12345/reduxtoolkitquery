import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addComment } from '../features/comment/commentSlice';
import EditPost from '../pages/EditPost';
// import { EditPost } from '../pages/EditPost';
const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const addCommentHandler = (post) => {
    dispatch(addComment({ post, count: 1 }));
  };

  const navigate = useNavigate();

  const addToCart = (product) => {
    // dispatch(addCart({ product, qty: Number(1) }));
    // navigate('/carts');
  };

  const addToWishHandler = (product) => {
    // dispatch(addToWishList(product));
    // navigate('/wishlists');
  };
  const editPostHandler = (post) => {};

  const { id, title, postText, username } = post || {};
  return (
    <div>
      <h3 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-green-200">
        {title}
      </h3>
      <div>
        <span className="text-xl font-bold dark:text-green-200">
          {postText}
        </span>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm line-through opacity-50 dark:text-green-200">
            {username}
          </span>

          {/* <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
            save 20%
          </span> */}
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        {/* <button
          onClick={() => addToCart(product)}
          className="bg-red-500/80 hover:bg-red-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition dark:bg-rose-600">
          Add Post
        </button>

        <button
          onClick={() => addToWishHandler(product)}
          className="flex-grow flex justify-center items-center bg-green-300/60 hover:bg-green-300/80 transition rounded-md dark:bg-rose-300">
        
        </button>
        
        <Link
        to={`/product/${id}`}
        className="flex-grow flex justify-center items-center bg-green-300/60 hover:bg-green-300/80 transition rounded-md dark:bg-green-200">
      </Link> */}
        <Link
          to={`/editPost/${id}`}
          className="flex-grow flex justify-center items-center bg-green-300/60 hover:bg-green-300/80 transition rounded-md dark:bg-rose-300">
          Edit
        </Link>
        <Link
        to={`/update/post`}
          className="flex-grow flex justify-center items-center bg-green-300/60 hover:bg-green-300/80 transition rounded-md dark:bg-rose-300">
          Edit 2
        </Link>
        <Link
          to={`/${id}`}
          className="flex-grow flex justify-center items-center bg-green-300/60 hover:bg-green-300/80 transition rounded-md dark:bg-green-200">
          Preview
        </Link>
        <button onClick={() => addCommentHandler(post)}>Add Comment</button>
      </div>
    </div>
  );
};

export default PostCard;
