import { storePosts } from '../../../../store/posts'

// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_HOME_STATE = 'CHANGE_HOME_STATE'
const APPEND_HOME_POSTS = 'APPEND_HOME_POSTS'

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

const appendPosts = (posts) => {
  return {
    type    : APPEND_HOME_POSTS,
    payload : {
      posts
    }
  }
}

export const fetchNext = () => {
  return (dispatch, getState) => {
    dispatch(changeState('loading'))

    return fetch(getState().home.nextUrl)
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (response.ok) {
          dispatch(storePosts(json.data))
          dispatch(appendPosts(json.data))
          dispatch(changeNextUrl(json.pagination.nextUrl))
          dispatch(changeState('idle'))
        } else {
          throw new Error('Error fetching posts!')
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
  [APPEND_HOME_POSTS]: (state, action) => Object.assign({}, state, { postIds: [...state.postIds, ...action.payload.posts.map(post => post.id)] })
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
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
