import React, { Component } from 'react'
import Card from '../../../../components/Card'
import './HomeView.scss'

export class HomeView extends Component {
  componentDidMount () {
    this.props.fetchNext()
  }

  render () {
    return (
      <div className="home-container">
        <div className="gutter" />
        <div className="home-main">
          {this.props.home.posts.map(post => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <div className="gutter" />
      </div>
    )
  }
}

export default HomeView
