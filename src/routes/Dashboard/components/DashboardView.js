import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './DashboardView.scss'

export const DashboardView = ({ children, session }) => (
  <div className="page">
    <div className="header">
      <div className="gutter">{session.username}</div>
      <div className="header-content">
        <div className="font-lobster">
          <IndexLink to="/" activeClassName="nav-active">Jellypic</IndexLink>
        </div>
        <div className="header-content-icons text-right">
          <div></div>
          <div>
            <a href=""><i className="fa fa-camera fa-2x" aria-hidden="true"></i></a>
          </div>
          <div>
            <a href=""><i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i></a>
          </div>
          <div>
            <Link to="/login" activeClassName="nav-active"><i className="fa fa-heart fa-2x" aria-hidden="true"></i></Link>
          </div>
          <div>
            <Link to="/profile" activeClassName="nav-active"><i className="fa fa-user fa-2x" aria-hidden="true"></i></Link>
          </div>
        </div>
      </div>
      <div className="gutter"></div>
    </div>
    <div>
      {children}
    </div>
  </div>
)

export default DashboardView
