import { connect } from 'react-redux'
import { fetchNext } from '../modules/home'
import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  fetchNext
}

const mapStateToProps = (state) => ({
  home : state.home,
  entities: state.entities
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
