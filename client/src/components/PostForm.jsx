import React from 'react'
import { Link } from 'react-router-dom'

const PostForm = ({posts}) => {
  return (
    <div>
        <div>{posts?.post?.title}</div>
        <div>{posts?.post?.username}</div>
        <div>{posts?.post?.postText}</div>
        <div>{posts?.count}</div>
    <Link to='/'>Back</Link>
    </div>

  )
}

export default PostForm