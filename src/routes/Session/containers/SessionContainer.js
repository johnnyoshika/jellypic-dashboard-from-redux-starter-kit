import { connect } from 'react-redux'
import { authenticate } from '../modules/session'
import SessionView from '../components/SessionView'

const mapDispatchToProps = {
  authenticate
}

const mapStateToProps = (state) => ({
  session : state.session,
  uploader: state.uploader
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionView)
