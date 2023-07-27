import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({comment}) => {
  return (
    <div>
        <div>{comment?.post?.title}</div>
        <div>{comment?.post?.username}</div>
        <div>{comment?.post?.postText}</div>
        <div>{comment?.count}</div>
    <Link to='/'>Back</Link>
    </div>

  )
}

export default Comment