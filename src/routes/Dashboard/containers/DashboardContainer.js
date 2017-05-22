import { connect } from 'react-redux'
import { setSession } from '../../../store/session'
import DashboardView from '../components/DashboardView'

const mapDispatchToProps = {
  setSession : setSession
}

const mapStateToProps = (state) => ({
  session : state.session
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)