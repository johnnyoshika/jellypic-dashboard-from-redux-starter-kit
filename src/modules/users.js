import { ADD_ENTITIES } from './entities'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_ENTITIES]: (state, action) => ({
    ...state,
    ...action.payload.users
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
function usersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { usersReducer as default }
