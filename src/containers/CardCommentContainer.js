import { connect } from 'react-redux'
import { deleteComment } from '../modules/commentState'
import CardComment from '../components/CardComment'

const mapDispatchToProps = {
  deleteComment
}

const mapStateToProps = (state) => ({
  session: state.session,
  commentState: state.commentState
})

export default connect(mapStateToProps, mapDispatchToProps)(CardComment)