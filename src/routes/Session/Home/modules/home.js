import { normalize } from 'normalizr'
import { post as postSchema } from '../../../../store/schema'
import { addEntities } from '../../../../modules/entities'

// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_HOME_STATE = 'CHANGE_HOME_STATE'
const APPEND_HOME_POSTS_IDS = 'APPEND_HOME_POSTS_IDS'
const PREPEND_HOME_POSTS_IDS = 'PREPEND_HOME_POSTS_IDS'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type    : CHANGE_HOME_STATE,
    payload : {
      state,
      error: null
    }
  }
}

const fetchFailed = (message) => {
  return {
    type    : CHANGE_HOME_STATE,
    payload : {
      state: 'error',
      error: message
    }
  }
}

const changeNextUrl = (nextUrl) => {
  return {
    type    : CHANGE_HOME_STATE,
    payload : {
      nextUrl
    }
  }
}

const appendPostIds = (ids) => {
  return {
    type    : APPEND_HOME_POSTS_IDS,
    payload : {
      ids
    }
  }
}

const prependPostIds = (ids) => {
  return {
    type    : PREPEND_HOME_POSTS_IDS,
    payload : {
      ids
    }
  }
}

const fetchNext = () => {
  return (dispatch, getState) => {
    dispatch(changeState('loading'))

    return fetch(getState().home.nextUrl, {
      credentials: 'include'
    })
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (response.ok) {
          const data = normalize(json.data, [ postSchema ])
          dispatch(addEntities(data.entities))
          dispatch(appendPostIds(data.result))
          dispatch(changeNextUrl(json.pagination.nextUrl))
          dispatch(changeState('idle'))
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
  [CHANGE_HOME_STATE]: (state, action) => Object.assign({}, state, action.payload),
  [APPEND_HOME_POSTS_IDS]: (state, action) => Object.assign({}, state, { postIds: [...state.postIds, ...action.payload.ids] }),
  [PREPEND_HOME_POSTS_IDS]: (state, action) => Object.assign({}, state, { postIds: [...action.payload.ids, ...state.postIds] }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  state: 'idle', // loading,idle,error
  error: null,
  nextUrl: '/api/posts',
  postIds: []
}
function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { homeReducer as default, prependPostIds, fetchNext }
