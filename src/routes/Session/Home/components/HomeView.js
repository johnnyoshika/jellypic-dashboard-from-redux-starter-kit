import React, { Component } from 'react'
import Card from '../../../../containers/CardContainer'
import Subscribe from '../../../../containers/SubscribeContainer'
import ErrorMessage from '../../../../components/ErrorMessage'
import { selectPost } from '../../../../modules/posts'
import './HomeView.scss'

class HomeView extends Component {
  componentDidMount () {
    this.props.fetchNext()
  }

  renderError () {
    return (
      <div className="text-center">
        <ErrorMessage message={this.props.home.error} />
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

  render () {
    return (
      <div className="home-container">
        <div className="gutter" />
        <div className="home-main">
          <Subscribe />
          {this.props.home.posts.map(id => (
            <Card key={id} post={selectPost(this.props.entities, id)} />
          ))}
          {this.props.home.state === 'error' && this.renderError()}
          {this.props.home.state === 'loading' && this.renderSpinner()}
        </div>
        <div className="gutter" />
      </div>
    )
  }
}

export default HomeView
