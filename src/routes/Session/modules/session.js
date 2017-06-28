import { normalize } from 'normalizr'
import { user as userSchema } from '../../../store/schema'
import { addEntities } from '../../../modules/entities'

// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_SESSION_STATE = 'CHANGE_SESSION_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type    : CHANGE_SESSION_STATE,
    payload : {
      state,
      error: null,
      user: null
    }
  }
}

const setSession = (userId) => {
  return {
    type: CHANGE_SESSION_STATE,
    payload: {
      state: 'authenticated',
      user: userId
    }
  }
}

const authenticationFailed = (message) => {
  return {
    type: CHANGE_SESSION_STATE,
    payload: {
      state: 'error',
      error: message,
      user: null
    }
  }
}

const authenticate = () => {
  return (dispatch, getState) => {
    dispatch(changeState('checking'))

    return fetch('/api/sessions/me', {
      credentials: 'include'
    })
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (response.ok) {
          const data = normalize(json, userSchema)
          dispatch(addEntities(data.entities))
          dispatch(setSession(data.result))
          return;
        }

        if (response.status === 401)
          dispatch(changeState('anonymous'))
        else
          dispatch(authenticationFailed(json.message))
      })
    })
    .catch(error => dispatch(authenticationFailed(error.message)))
  }
}

// ------------------------------------
// Action Handlers
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
  user: null
}
function sessionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { sessionReducer as default, authenticate }
