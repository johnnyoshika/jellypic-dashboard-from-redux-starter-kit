// ------------------------------------
// Constants
// ------------------------------------
const STORE_POSTS = 'STORE_POSTS'

// ------------------------------------
// Actions
// ------------------------------------
export const storePosts = (posts) => {
  return {
    type    : STORE_POSTS,
    payload : {
      posts
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [STORE_POSTS]: (state, action) => {
    const posts = {}
    action.payload.posts.forEach(post => {
      posts[post.id] = post
    })
    return Object.assign({}, state, posts)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function postsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}