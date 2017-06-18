import { connect } from 'react-redux'
import { savePost } from '../modules/uploader'
import Uploader from '../components/Uploader'

const mapDispatchToProps = {
  savePost
}

const mapStateToProps = (state) => ({
  uploader: state.uploader
})

export default connect(mapStateToProps, mapDispatchToProps)(Uploader)
