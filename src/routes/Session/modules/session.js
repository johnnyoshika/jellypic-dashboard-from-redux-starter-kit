// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_SESSION_STATE = 'CHANGE_SESSION_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type    : CHANGE_SESSION_STATE,
    payload : {
      state,
      error: null,
      userId: null,
      username: null
    }
  }
}

const setSession = (json) => {
  return {
    type: CHANGE_SESSION_STATE,
    payload: {
      state: 'authenticated',
      userId: json.userId,
      username: json.username
    }
  }
}

const authenticationFailed = (message) => {
  return {
    type: CHANGE_SESSION_STATE,
    payload: {
      state: 'error',
      error: message,
      userId: null,
      username: null
    }
  }
}

export const authenticate = () => {
  return (dispatch, getState) => {
    dispatch(changeState('checking'))

    return fetch('/api/sessions/me')
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (response.ok)
          dispatch(setSession(json))
        else if (response.status === 401)
          dispatch(changeState('anonymous'))
        else
          throw new Error('Login failed. Please try again!')
      })
    })
    .catch(error => dispatch(authenticationFailed(error.message)))
  }
}

// ------------------------------------
// Action Handlers`
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_SESSION_STATE]: (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  state: 'anonymous', // checking,anonymous,authenticated,error
  error: null,
  userId: null,
  username: null
}
export default function sessionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
