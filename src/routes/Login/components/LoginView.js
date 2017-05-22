import React, { Component } from 'react'
import './LoginView.scss'

export class LoginView extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="gutter"></div>
        <div className="login-main">
          <div className="font-lobster text-center mb-40">
            Jellypic
          </div>
          <div className="text-center">
            <a href="" className="btn">Log in with Facebook</a>
          </div>
        </div>
        <div className="gutter"></div>
      </div>
    )
  }
}

export default LoginView
