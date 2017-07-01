import { connect } from 'react-redux'
import { fetchPost } from '../modules/post'
import PostView from '../components/PostView'

const mapDispatchToProps = {
  fetchPost
}

const mapStateToProps = (state) => ({
  post : state.post,
  entities: state.entities
})

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
