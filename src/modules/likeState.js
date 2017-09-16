import { normalize } from 'normalizr'
import { post as postSchema } from '../store/schema'
import { addEntities } from '../modules/entities'

// ------------------------------------
// Constants
// ------------------------------------
const LIKE_STATE = 'LIKE_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (postId, state) => {
  return {
    type: LIKE_STATE,
    payload: makePayload(postId, {
      state: state,
      error: null
    })
  }
}

const saveFailed = (postId, message) => {
  return {
    type: LIKE_STATE,
    payload: makePayload(postId, {
      state: 'error',
      error: message
    })
  }
}

const saveSucceeded = (postId) => {
  return {
    type: LIKE_STATE,
    payload: makePayload(postId, {
      state: 'idle',
      error: null
    })
  }
}

const like = (postId) => save(postId, 'PUT')

const unlike = (postId) => save(postId, 'DELETE')

const save = (postId, method) => {
  return (dispatch, getState) => {
    dispatch(changeState(postId, 'saving'))

    return fetch(`/api/posts/${postId}/likes`, {
      method: method,
      credentials: 'include'
    })
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (!response.ok) {
          dispatch(saveFailed(postId, json.message))
          return
        }

        const data = normalize(json, postSchema)
        dispatch(saveSucceeded(postId))
        dispatch(addEntities(data.entities))
      })
    })
    .catch(error => dispatch(saveFailed(postId, error.message)))
  }
}

const makePayload = (postId, data) => {
  const payload = {}
  payload[postId] = data
  return payload
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LIKE_STATE]: (state, action) => ({ ...state, ...action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}
function likeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { likeReducer as default, like, unlike }
