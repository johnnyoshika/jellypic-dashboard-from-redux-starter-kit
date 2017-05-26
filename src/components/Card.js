import React, { Component } from 'react'
import CardComment from './CardComment'
import Moment from 'react-moment'

export class Card extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-heading">
          <div className="card-heading-user">
            <div className="card-heading-user-image">
              <img src={this.props.post.user.profilePicture} />
            </div>
            <div className="card-heading-user-name">
              <a href="">{this.props.post.user.username}</a>
            </div>
          </div>
          <div className="card-heading-time text-right">
            <Moment fromNow ago unix>{this.props.post.createdAt}</Moment>
          </div>
        </div>
        <div className="card-photo">
          <img className="image-100" src={this.props.post.imageUrl} />
        </div>
        <div className="card-info">
          <div className="card-info-likes">
            {this.props.post.likes.count} likes
          </div>
          <div className="card-info-comments">
            {this.props.post.comments.data.map(comment => (
              <CardComment key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="card-info-add-comment">
            <div>
              <a href=""><i className="fa fa-heart fa-2x" aria-hidden="true" /></a>
            </div>
            <div>
              <input className="card-info-add-comment-input" type="text" placeholder="Add a comment..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card