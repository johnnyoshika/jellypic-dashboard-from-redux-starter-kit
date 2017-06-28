import { denormalize } from 'normalizr'
import { post } from '../store/schema'
import { ADD_ENTITIES } from './entities'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ENTITIES]: (state, action) => ({
    ...state,
    ...action.payload.posts
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
function postsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Hydration
// ------------------------------------
const selectPost = (state, id) => denormalize(id, post, state)

export { postsReducer as default, selectPost }
