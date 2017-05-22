import React from 'react'
import './HomeView.scss'

export const HomeView = () => (
  <div className="home-container">
    <div className="gutter" />
    <div className="home-main">
      <div className="card">
        <div className="card-heading">
          <div className="card-heading-user">
            <div className="card-heading-user-image">
              <img src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_30,r_max,w_30/v1427815401/jw0aeeqio58spnjeqn0b.png" />
            </div>
            <div className="card-heading-user-name">
              <a href="">johnnyoshika</a>
            </div>
          </div>
          <div className="card-heading-time text-right">
                      20h
                  </div>
        </div>
        <div className="card-photo">
          <img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fit,h_600,w_600/v1495017309/2017-05-15_21.04_2_sruepp.jpg" />
        </div>
        <div className="card-info">
          <div className="card-info-likes">
                      100,000 likes
                  </div>
          <div className="card-info-comments">
            <div className="card-info-comment">
              <div className="card-info-comment-user pull-left">
                <a href="">johnnyoshika</a>
              </div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus placerat nisi, vel blandit elit semper a. Fusce quis purus ut neque tincidunt convallis id molestie tellus. Phasellus aliquet accumsan turpis, sed aliquet sem eleifend at. In eros
                          tortor, egestas sit amet aliquet vel, pellentesque sed purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum felis aliquet maximus facilisis. Vivamus hendrerit ligula magna,
                          eget commodo lorem ullamcorper ac. Curabitur porttitor fermentum purus ac sodales.
                      </div>
          </div>
          <div className="card-info-comment">
            <div className="card-info-comment-user pull-left">
              <a href="">johnnyoshika</a>
            </div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus placerat nisi, vel blandit elit semper a. Fusce quis purus ut neque tincidunt convallis id molestie tellus. Phasellus aliquet accumsan turpis, sed aliquet sem eleifend at. In eros
                      tortor, egestas sit amet aliquet vel, pellentesque sed purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum felis aliquet maximus facilisis. Vivamus hendrerit ligula magna,
                      eget commodo lorem ullamcorper ac. Curabitur porttitor fermentum purus ac sodales.
                  </div>
          <div className="card-info-add-comment">
            <div>
              <a href=""><i className="fa fa-heart fa-2x" aria-hidden="true" /></a>
            </div>
            <div>
              <input className="card-info-add-comment-input" type="text" placeholder="Add a comment..." />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-heading">
          <div className="card-heading-user">
            <div className="card-heading-user-image">
              <img src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_30,r_max,w_30/v1427815401/jw0aeeqio58spnjeqn0b.png" />
            </div>
            <div className="card-heading-user-name">
              <a href="">johnnyoshika</a>
            </div>
          </div>
          <div className="card-heading-time text-right">
                      20h
                  </div>
        </div>
        <div className="card-photo">
          <img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fit,h_600,w_600/v1495017309/2017-05-15_21.04_2_sruepp.jpg" />
        </div>
        <div className="card-info">
          <div className="card-info-likes">
                      100,000 likes
                  </div>
          <div className="card-info-comments">
            <div className="card-info-comment">
              <div className="card-info-comment-user pull-left">
                <a href="">johnnyoshika</a>
              </div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus placerat nisi, vel blandit elit semper a. Fusce quis purus ut neque tincidunt convallis id molestie tellus. Phasellus aliquet accumsan turpis, sed aliquet sem eleifend at. In eros
                          tortor, egestas sit amet aliquet vel, pellentesque sed purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum felis aliquet maximus facilisis. Vivamus hendrerit ligula magna,
                          eget commodo lorem ullamcorper ac. Curabitur porttitor fermentum purus ac sodales.
                      </div>
          </div>
          <div className="card-info-comment">
            <div className="card-info-comment-user pull-left">
              <a href="">johnnyoshika</a>
            </div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus placerat nisi, vel blandit elit semper a. Fusce quis purus ut neque tincidunt convallis id molestie tellus. Phasellus aliquet accumsan turpis, sed aliquet sem eleifend at. In eros
                      tortor, egestas sit amet aliquet vel, pellentesque sed purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum felis aliquet maximus facilisis. Vivamus hendrerit ligula magna,
                      eget commodo lorem ullamcorper ac. Curabitur porttitor fermentum purus ac sodales.
                  </div>
          <div className="card-info-add-comment">
            <div>
              <a href=""><i className="fa fa-heart fa-2x" aria-hidden="true" /></a>
            </div>
            <div>
              <input className="card-info-add-comment-input" type="text" placeholder="Add a comment..." />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="gutter" />
  </div>
)

export default HomeView
