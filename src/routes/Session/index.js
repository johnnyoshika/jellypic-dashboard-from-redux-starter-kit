import SessionContainer from './containers/SessionContainer'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'

// Sync route definition
export default {
  component: SessionContainer,
  indexRoute  : Home,
  childRoutes : [
    Post,
    Profile
  ]
}
