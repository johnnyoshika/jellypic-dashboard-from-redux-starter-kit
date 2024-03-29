import React, { Component } from 'react'

class CardComment extends Component {
  constructor () {
    super()

    // REACT ES6 classes don't autobind, so bind it in the constructor
    // as suggested here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#es6-classes
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  onDeleteClick () {
    // Known issue:
    // b/c this shares the same state as Card.js' add comment (in commentState.state[postId])
    // state changes (i.e. opacityc change) will be reflected the comment text box and not in the comment that we're trying to delete.
    // So while we're trying to delete this comment, the comment text box's opacity will be reduced.
    this.props.deleteComment(this.props.postId, this.props.comment.id)
  }

  render () {
    return (
      <div className="card-info-comment">
        <div className="card-info-comment-user pull-left">
          <a href="">{this.props.comment.user.username}</a>
        </div>
        {this.props.session.user === this.props.comment.user.id &&
          <div className="pull-right">
            <a onClick={this.onDeleteClick}><i className="fa fa-times-circle" aria-hidden="true" /></a>
          </div>
        }
        {this.props.comment.text}
      </div>
    )
  }
}

export default CardComment
