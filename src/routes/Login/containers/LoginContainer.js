import { connect } from 'react-redux'
import { checkFacebook, loginWithFacebook } from '../modules/login'
import LoginView from '../components/LoginView'

const mapDispatchToProps = {
  checkFacebook : checkFacebook,
  loginWithFacebook : loginWithFacebook
}

const mapStateToProps = (state) => ({
  login : state.login
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
