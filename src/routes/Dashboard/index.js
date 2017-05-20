import DashboardView from './components/DashboardView'
import Home from './Home'
import Profile from './Profile'

// Sync route definition
export default {
  component : DashboardView,
  indexRoute  : Home,
  childRoutes : [
    Profile
  ],
  onEnter(nextState, replace) {
    // TODO: redirect if not logged in
    // example: https://github.com/ReactTraining/react-router/tree/4f2746155ce1cb6bd194864f9feb1599b2e46c51/examples/auth-flow
    if (false)
      replace({
        pathname: '/login',
        state: { nextPathName: nextState.location.pathname }
      });
  }
}
