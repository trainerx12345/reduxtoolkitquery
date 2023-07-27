import React, { useState } from 'react';
import { useCreatePostMutation } from '../features/post/postApi';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
const AddPost = () => {
  const navigate = useNavigate();
  const [createPost, { isLoading, isError, error, isSuccess }] =
    useCreatePostMutation() || {};

  if (isLoading) {
  }
  if (isError) {
    console.log(isError);
    console.log(error.message);
  }
  if (isSuccess) {
    navigate('/');
  }

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({
      title: title,
      postText: postText,
      username: username,
    })
      .then((result) => {
        console.log(result);
        setTitle('');
        setPostText('');
        setUsername('');
      })
      .catch((error) => {
        console.log(error);
      });
  
  };

  return (
    <div>
      <h1>Add Post</h1>
      <Link to='/'>Back</Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post Text</label>
        <input
          type="text"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
