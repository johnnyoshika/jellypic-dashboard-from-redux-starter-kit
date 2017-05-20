import React from 'react'
import './ProfileView.scss'

export const ProfileView = () => (
  <div className="profile-container">
      <div className="gutter"></div>
      <div className="profile-main">
          <div className="profile-headline">
              <div className="profile-headline-photo">
                  <img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_152,r_max,w_152/v1427815401/jw0aeeqio58spnjeqn0b.png" />
              </div>
              <div className="profile-info">
                  <div className="profile-info-username">
                      johnnyoshika
                  </div>
                  <div className="profile-info-social-stats">
                      <div><strong>169</strong> posts</div>
                      <div><strong>71</strong> followers</div>
                      <div><strong>22</strong> following</div>
                  </div>
                  <div className="profile-info-name">
                      <strong>Johnny Oshika</strong>
                  </div>
              </div>
          </div>
          <div className="profile-photos">
              <div className="profile-photo"><img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_293,w_293/v1433342408/gyqjdn6nkhrauzahkyqs.jpg" /></div>
              <div className="profile-photo"><img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_293,w_293/v1433342408/gyqjdn6nkhrauzahkyqs.jpg" /></div>
              <div className="profile-photo"><img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_293,w_293/v1433342408/gyqjdn6nkhrauzahkyqs.jpg" /></div>
              <div className="profile-photo"><img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_293,w_293/v1433342408/gyqjdn6nkhrauzahkyqs.jpg" /></div>
              <div className="profile-photo"><img className="image-100" src="http://res.cloudinary.com/dfk3jxiqp/image/upload/c_fill,g_auto:faces,h_293,w_293/v1433342408/gyqjdn6nkhrauzahkyqs.jpg" /></div>
          </div>
          <div className="gutter"></div>
      </div>
  </div>
)

export default ProfileView
