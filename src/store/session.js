// ------------------------------------
// Constants
// ------------------------------------
export const SET_SESSION = 'SET_SESSION'

// ------------------------------------
// Actions
// ------------------------------------
export function setSession (session = null) {
  return {
    type    : SET_SESSION,
    payload : session
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_SESSION]: (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { username: 'samsmith' }
export default function sessionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
