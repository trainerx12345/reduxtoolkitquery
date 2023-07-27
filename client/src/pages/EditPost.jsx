import React, { useState } from 'react';
import {
  useEditPostMutation,
  useGetPostByIdQuery,
} from '../features/post/postApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const EditPost = () => {
  const { id } = useParams();
  const {
    data: posts,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useGetPostByIdQuery(id) || {};
  const [updatePost, { isLoadingUpdate, isSuccessUpdate, isErrorUpdate }] =
    useEditPostMutation();

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [username, setUsername] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onPostTextChanged = (e) => setPostText(e.target.value);
  const onUsernameTextChanged = (e) => setUsername(e.target.value);

  const navigate = useNavigate();
  if (isLoadingUpdate) {
  }

  if (isSuccessUpdate) {
    navigate('/');
  }
  if (isErrorUpdate) {
  }
  const onSavePostClicked = async (e) => {
    e.preventDefault();
    if (title && postText && username) {
      await updatePost({ id: id, title, postText });
    }
  };
  if (isSuccess) {
    console.log(posts);
    const temp = Object.keys(posts).length;
    console.log(temp, 'laman');
    if (temp?.length > 0) {
      setPostText(posts.postText);
      setTitle(posts.title);
      setUsername(posts.username);
    }
  }

  return (
    <div>
      <h1>Edit Post</h1>
      {isSuccess && (
        <div>
          <form onSubmit={onSavePostClicked}>
            <label>Title</label>
            <input type="text" value={title} onChange={onTitleChanged} />
            <label>Post Text</label>
            <input type="text" value={postText} onChange={onPostTextChanged} />
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={onUsernameTextChanged}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPost;
