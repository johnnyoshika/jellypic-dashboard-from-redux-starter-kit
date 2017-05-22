import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ErrorMessage from '../../../components/ErrorMessage'
import './LoginView.scss'

export class LoginView extends Component {
  constructor () {
    super()

    // REACT ES6 classes don't autobind, so bind it in the constructor
    // as suggested here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#es6-classes
    this.onClick = this.onClick.bind(this)
  }

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

  onClick (arg1, arg2, arg3) {
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
            <button className="btn btn-primary btn-lg" disabled={this.disabled()} onClick={this.onClick}>Log in with Facebook</button>
            {this.props.login.state === 'error' && <ErrorMessage message={this.props.login.error} />}
          </div>
        </div>
        <div className="gutter" />
      </div>
    )
  }
}

export default LoginView
