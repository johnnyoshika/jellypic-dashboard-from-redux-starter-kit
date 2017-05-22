import SessionContainer from './containers/SessionContainer'
import Home from './Home'
import Profile from './Profile'

// Sync route definition
export default {
  component: SessionContainer,
  indexRoute  : Home,
  childRoutes : [
    Profile
  ]
}
