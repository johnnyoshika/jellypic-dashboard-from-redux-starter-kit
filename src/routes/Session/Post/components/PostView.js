import React, { Component } from 'react'
import Card from '../../../../containers/CardContainer'
import ErrorMessage from '../../../../components/ErrorMessage'
import { selectPost } from '../../../../modules/posts'
import './PostView.scss'

class PostView extends Component {
  componentDidMount () {
    this.props.fetchPost(this.props.params.id)
  }

  renderError () {
    return (
      <div className="text-center">
        <ErrorMessage message={this.props.post.error} />
      </div>
    )
  }

  renderSpinner () {
    return (
      <div className="text-center">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      </div>
    )
  }

  renderPost () {
    return (
      <Card key={this.props.params.id} post={selectPost(this.props.entities, this.props.params.id)} />
    )
  }

  render () {
    return (
      <div className="post-container">
        <div className="gutter" />
        <div className="post-main">
          {(() => {
            switch (this.props.post.state) {
              case 'error':
                return this.renderError()
              case 'loading':
                return this.renderSpinner()
              case 'success':
                return this.renderPost()
              default :
                null
            }
          })()}
        </div>
        <div className="gutter" />
      </div>
    )
  }
}

export default PostView
