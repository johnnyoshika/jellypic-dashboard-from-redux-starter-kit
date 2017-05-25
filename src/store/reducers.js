import { combineReducers } from 'redux'
import locationReducer from './location'
import loginReducer from '../routes/Login/modules/login'
import sessionReducer from '../routes/Session/modules/session'
import homeReducer from '../routes/Session/Home/modules/home'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    login: loginReducer,
    session: sessionReducer,
    home: homeReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
