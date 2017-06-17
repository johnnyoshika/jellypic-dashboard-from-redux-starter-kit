import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

class App extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={browserHistory} children={this.props.routes} />
          <ReduxToastr
            timeOut={6000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="bounceIn"
            transitionOut="bounceOut"
            progressBar={false}/>
        </div>
      </Provider>
    )
  }
}

export default App
