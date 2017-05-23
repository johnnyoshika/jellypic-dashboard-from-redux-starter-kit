import { connect } from 'react-redux'
import { authenticate } from '../modules/session'
import SessionView from '../components/SessionView'

const mapDispatchToProps = {
  authenticate
}

const mapStateToProps = (state) => ({
  session : state.session
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionView)
