import { connect } from 'react-redux'
import { setSession } from '../../../store/session'
import SessionView from '../components/SessionView'

const mapDispatchToProps = {
  setSession : setSession
}

const mapStateToProps = (state) => ({
  session : state.session
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionView)
