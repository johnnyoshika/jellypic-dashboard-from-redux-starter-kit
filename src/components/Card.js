import React, { Component } from 'react'
import CardComment from '../containers/CardCommentContainer'
import Moment from 'react-moment'
import { Image } from 'cloudinary-react'
import { toastr } from 'react-redux-toastr'
import { Link } from 'react-router'
import './Card.scss'

/* global CLOUDINARY_CLOUD_NAME */

class Card extends Component {
  constructor () {
    super()

    this.state = {
      comment: ''
    }

    // REACT ES6 classes don't autobind, so bind it in the constructor
    // as suggested here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#es6-classes
    this.toggleLike = this.toggleLike.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
    this.commentDisabled = this.commentDisabled.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.checkLikeState(nextProps)
    this.checkCommentState(nextProps)
  }

  checkLikeState (nextProps) {
    if (this.likeState(nextProps.likeState).state === 'error')
      if (this.likeState().error !== this.likeState(nextProps.likeState).error)
        toastr.error(this.likeState(nextProps.likeState).error)
  }

  toggleLike () {
    if (this.likeIsDirty())
      return

    if (this.liked())
      this.props.unlike(this.props.post.id)
    else
      this.props.like(this.props.post.id)
  }

  liked () {
    return this.props.post.likes.some(like =>
      like.user.id === this.props.session.user)
  }

  likeIsDirty () {
    return this.likeState().state === 'saving'
  }

  likeState (state) {
    state = state || this.props.likeState
    return state[this.props.post.id] || {}
  }

  checkCommentState (nextProps) {
    if (this.commentState(nextProps.commentState).state === 'error')
      if (this.commentState().error !== this.commentState(nextProps.commentState).error)
        toastr.error(this.commentState(nextProps.commentState).error)

    if (this.commentState().state === 'saving')
      if (this.commentState(nextProps.commentState).state !== 'error')
        this.setState({ comment: '' })
  }

  onKeyPress (target) {
    if (target.charCode === 13)
      this.addComment()
  }

  onCommentChange (event) {
    this.setState({ comment: event.target.value })
  }

  addComment () {
    this.setState({ commentDisabled: true })
    this.props.addComment(this.props.post.id, this.state.comment)
  }

  commentState (state) {
    state = state || this.props.commentState
    return state[this.props.post.id] || {}
  }

  commentDisabled () {
    return this.commentState().state === 'saving'
  }

  render () {
    return (
      <div className="card">
        <div className="card-heading">
          <div className="card-heading-user">
            <div className="card-heading-user-image">
              <img src={this.props.post.user.thumbUrl} />
            </div>
            <div className="card-heading-user-name">
              <a href="">{this.props.post.user.username}</a>
            </div>
          </div>
          <div className="card-heading-time text-right">
            <Link to={'/posts/' + this.props.post.id}><Moment fromNow ago unix>{this.props.post.createdAt}</Moment></Link>
          </div>
        </div>
        <div className="card-photo">
          <Image
            className="image-100"
            cloudName={CLOUDINARY_CLOUD_NAME}
            publicId={this.props.post.cloudinaryPublicId}
            crop="fit"
            height="600"
            width="600"
            secure />
        </div>
        <div className="card-info">
          <div className="card-info-likes">
            {this.props.post.likes.length} likes
          </div>
          <div className="card-info-comments">
            {this.props.post.comments.map(comment => (
              <CardComment key={comment.id} postId={this.props.post.id} comment={comment} />
            ))}
          </div>
          <div className="card-info-add-comment">
            <div>
              <a onClick={this.toggleLike}><i className={'fa fa-heart fa-2x' + (this.liked() ? ' red-icon' : '') + (this.likeIsDirty() ? ' barely-visible' : '')} aria-hidden="true" /></a>
            </div>
            <div>
              <input className="card-info-add-comment-input" type="text" value={this.state.comment} onChange={this.onCommentChange} onKeyPress={this.onKeyPress} disabled={this.commentDisabled()} placeholder="Add a comment..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
