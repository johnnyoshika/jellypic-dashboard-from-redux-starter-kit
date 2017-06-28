import { combineReducers } from 'redux'
import posts from './posts'
import users from './users'
import likes from './likes'
import comments from './comments'

export default combineReducers({
  posts,
  users,
  likes,
  comments
})
