import { ADD_ENTITIES } from './entities'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ENTITIES]: (state, action) => ({
    ...state,
    ...action.payload.comments
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
function commentsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { commentsReducer as default }
