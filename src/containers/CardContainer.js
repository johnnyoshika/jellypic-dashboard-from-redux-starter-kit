import { connect } from 'react-redux'
import { like, unlike } from '../modules/likeState'
import Card from '../components/Card'

const mapDispatchToProps = {
  like,
  unlike
}

const mapStateToProps = (state) => ({
  session: state.session,
  likeState: state.likeState
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)