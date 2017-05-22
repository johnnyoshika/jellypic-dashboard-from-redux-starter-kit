import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ErrorMessage from '../../../components/ErrorMessage'
import './LoginView.scss'

export class LoginView extends Component {
  componentWillMount () {
    this.props.checkFacebook()
  }

  componentDidUpdate (prevProps) {
    if (this.props.login.state === 'success')
      browserHistory.push('/')
  }

  disabled () {
    return this.props.login.state === 'processing' || this.props.login.state === 'success'
  }

  onClick () {
    this.props.loginWithFacebook()
  }

  render () {
    return (
      <div className="login-container">
        <div className="gutter" />
        <div className="login-main">
          <div className="font-lobster text-center mb-40">
            Jellypic
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" disabled={this.disabled()} onClick={this.onClick.bind(this)}>Log in with Facebook</button>
            {this.props.login.state === 'error' && <ErrorMessage message={this.props.login.error} />}
          </div>
        </div>
        <div className="gutter" />
      </div>
    )
  }
}

export default LoginView
