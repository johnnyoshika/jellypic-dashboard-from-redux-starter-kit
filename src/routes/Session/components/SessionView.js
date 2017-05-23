import React, { Component } from 'react'
import { IndexLink, Link, browserHistory } from 'react-router'
import ErrorMessage from '../../../components/ErrorMessage'
import './SessionView.scss'

export class SessionView extends Component {
  constructor () {
    super()

    // REACT ES6 classes don't autobind, so bind it in the constructor
    // as suggested here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#es6-classes
    this.onTryAgainClick = this.onTryAgainClick.bind(this)
  }

  componentWillMount () {
    if (this.props.session.state !== 'authenticated')
      this.props.authenticate()
  }

  componentDidUpdate (prevProps) {
    if (this.props.session.state === 'anonymous')
      browserHistory.replace('/login')
  }

  onTryAgainClick () {
    browserHistory.push('/login')
  }

  renderError () {
    return (
      <div className="login-container">
        <div className="gutter" />
        <div className="login-main">
          <div className="font-lobster text-center mb-40">
            Jellypic
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" onClick={this.onTryAgainClick}>Try again!</button>
            <ErrorMessage message={this.props.session.error} />
          </div>
        </div>
        <div className="gutter" />
      </div>
    )
  }

  renderSpinner () {
    return (
      <div className="login-container mt-80">
        <div className="gutter" />
        <div className="text-center">
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        </div>
        <div className="gutter" />
      </div>
    )
  }

  renderPage () {
    return (
      <div className="page">
        <div className="header">
          <div className="gutter" />
          <div className="header-content">
            <div className="font-lobster">
              <IndexLink to="/">Jellypic</IndexLink>
            </div>
            <div className="header-content-icons text-right">
              <div />
              <div>
                <a href=""><i className="fa fa-camera fa-2x" aria-hidden="true" /></a>
              </div>
              <div>
                <a href=""><i className="fa fa-cloud-upload fa-2x" aria-hidden="true" /></a>
              </div>
              <div>
                <Link to="/login" activeClassName="nav-active"><i className="fa fa-heart fa-2x" aria-hidden="true" /></Link>
              </div>
              <div>
                <Link to="/profile" activeClassName="nav-active"><i className="fa fa-user fa-2x" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <div className="gutter" />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

  render () {
    return (() => {
      if (this.props.session.state === 'authenticated')
        return this.renderPage()
      else if (this.props.session.state === 'error')
        return this.renderError()
      else
        return this.renderSpinner()
    })()
  }
}

export default SessionView
