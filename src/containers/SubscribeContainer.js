import { connect } from 'react-redux'
import { toggle } from '../modules/subscriber'
import Subscribe from '../components/Subscribe'

const mapDispatchToProps = {
    toggle
}

const mapStateToProps = (state) => ({
    subscriber: state.subscriber
})

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe)
