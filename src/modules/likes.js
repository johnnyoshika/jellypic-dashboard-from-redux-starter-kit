import { ADD_ENTITIES } from './entities'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ENTITIES]: (state, action) => ({
    ...state,
    ...action.payload.likes
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
function likesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { likesReducer as default }
