import { combineReducers } from 'redux'
import locationReducer from './location'
import uploaderReducer from '../modules/uploader'
import likeStateReducer from '../modules/likeState'
import commentStateReducer from '../modules/commentState'
import entitiesReducer from '../modules/entitiesReducer'
import subscriberReducer from '../modules/subscriber'
import loginReducer from '../routes/Login/modules/login'
import sessionReducer from '../routes/Session/modules/session'
import homeReducer from '../routes/Session/Home/modules/home'
import postReducer from '../routes/Session/Post/modules/post'
import { reducer as toastrReducer } from 'react-redux-toastr'

const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    uploader: uploaderReducer,
    likeState: likeStateReducer,
    commentState: commentStateReducer,
    login: loginReducer,
    session: sessionReducer,
    entities: entitiesReducer,
    subscriber: subscriberReducer,
    home: homeReducer,
    post: postReducer,
    toastr: toastrReducer,
    ...asyncReducers
  })
}

const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export { makeRootReducer as default, makeRootReducer, injectReducer }
