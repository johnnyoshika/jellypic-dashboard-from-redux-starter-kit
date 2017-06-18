import { combineReducers } from 'redux'
import locationReducer from './location'
import uploaderReducer from '../modules/uploader'
import loginReducer from '../routes/Login/modules/login'
import sessionReducer from '../routes/Session/modules/session'
import entitiesReducer from './entities'
import homeReducer from '../routes/Session/Home/modules/home'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    uploader: uploaderReducer,
    login: loginReducer,
    session: sessionReducer,
    entities: entitiesReducer,
    home: homeReducer,
    toastr: toastrReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
