import { normalize } from 'normalizr'
import { post as postSchema } from '../../../../store/schema'
import { addEntities } from '../../../../modules/entities'

// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_POST_STATE = 'CHANGE_POST_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type    : CHANGE_POST_STATE,
    payload : {
      state,
      error: null
    }
  }
}

const fetchFailed = (message) => {
  return {
    type    : CHANGE_POST_STATE,
    payload : {
      state: 'error',
      error: message
    }
  }
}

const fetchPost = (id) => {
  return (dispatch, getState) => {
    dispatch(changeState('loading'))

    return fetch(`/api/posts/${id}`, {
      credentials: 'include'
    })
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (response.ok) {
          const data = normalize(json, postSchema)
          dispatch(addEntities(data.entities))
          dispatch(changeState('success'))
        } else {
          dispatch(fetchFailed(json.message))
        }
      })
    })
    .catch(error => dispatch(fetchFailed(error.message)))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_POST_STATE]: (state, action) => ({ ...state, ...action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  state: 'idle', // loading,idle,error,success
  error: null
}
function postReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { postReducer as default, fetchPost }
