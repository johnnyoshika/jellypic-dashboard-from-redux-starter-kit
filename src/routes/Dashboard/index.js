import DashboardView from './components/DashboardView'
import Home from './Home'
import Profile from './Profile'

// Sync route definition
export default {
  component : DashboardView,
  indexRoute  : Home,
  childRoutes : [
    Profile
  ]
}
