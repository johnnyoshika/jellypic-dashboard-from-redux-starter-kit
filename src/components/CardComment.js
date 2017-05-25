import React from 'react'

export const CardComment = ({ comment }) => (
  <div className="card-info-comment">
    <div className="card-info-comment-user pull-left">
      <a href="">{comment.user.username}</a>
    </div>
    {comment.text}
  </div>
)

export default CardComment
