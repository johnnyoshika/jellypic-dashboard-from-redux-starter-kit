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
          {this.props.home.postIds.map(id => (
            <Card key={id} post={this.props.posts[id]} />
          ))}
        </div>
        <div className="gutter" />
      </div>
    )
  }
}

export default HomeView
