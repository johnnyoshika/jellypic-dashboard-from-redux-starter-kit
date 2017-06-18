import { storePosts } from '../store/posts'
import { prependPosts } from '../routes/Session/Home/modules/home' // feels ugly reaching in like this

// ------------------------------------
// Constants
// ------------------------------------
const UPLOADER_STATE = 'UPLOADER_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type: UPLOADER_STATE,
    payload: {
      state: state,
      error: null
    }
  }
}

const saveFailed = (message) => {
  return {
    type: UPLOADER_STATE,
    payload: {
      state: 'error',
      error: message
    }
  }
}

const saveSucceeded = () => {
  return {
    type: UPLOADER_STATE,
    payload: {
      state: 'idle',
      error: null
    }
  }
}

export const savePost = (cloudinaryPublicIds) => {
  return (dispatch, getState) => {
    dispatch(changeState('saving'))

    return fetch('/api/posts', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(cloudinaryPublicIds.map(id => ({
        cloudinaryPublicId: id
      })))
    })
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (!response.ok) {
          dispatch(saveFailed(json.message))
          return
        }

        dispatch(saveSucceeded())
        dispatch(storePosts(json.data))
        dispatch(prependPosts(json.data))
      })
    })
    .catch(error => dispatch(saveFailed(error.message)))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPLOADER_STATE]: (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  state: 'idle', // idle,saving,error
  error: null
}
export default function uploadReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
