import { connect } from 'react-redux'
import { like, unlike } from '../modules/likeState'
import { addComment, deleteComment } from '../modules/commentState'
import Card from '../components/Card'

const mapDispatchToProps = {
  like,
  unlike,
  addComment,
  deleteComment
}

const mapStateToProps = (state) => ({
  session: state.session,
  likeState: state.likeState,
  commentState: state.commentState
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)