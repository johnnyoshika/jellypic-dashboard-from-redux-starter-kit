import { connect } from 'react-redux'
import { fetchNext } from '../modules/home'
import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  fetchNext
}

const mapStateToProps = (state) => ({
  home : state.home,
  posts: state.entities.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
