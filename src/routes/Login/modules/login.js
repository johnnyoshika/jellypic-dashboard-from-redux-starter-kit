// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_LOGIN_STATE = 'CHANGE_LOGIN_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type: CHANGE_LOGIN_STATE,
    payload: {
      state: state,
      error: null
    }
  }
}

const loginFailed = (message) => {
  return {
    type: CHANGE_LOGIN_STATE,
    payload: {
      state: 'error',
      error: message
    }
  }
}

const loginSucceeded = () => {
  return {
    type: CHANGE_LOGIN_STATE,
    payload: {
      state: 'success',
      error: null
    }
  }
}

const checkFacebook = () => {
  return (dispatch, getState) => {
    dispatch(changeState('processing'))

    ensureFacebookSdkLoaded(() => {
      window.FB.getLoginStatus((response) => {
        checkFacebookLoginStatus(dispatch, response)
      })
    })
  }
}

const loginWithFacebook = () => {
  return (dispatch, getState) => {
    dispatch(changeState('processing'))
    window.FB.login((response) => {
      checkFacebookLoginStatus(dispatch, response)
    })
  }
}

const ensureFacebookSdkLoaded = (callback) => {
  if (window.fbAsyncInit)
    return callback()

  /* global FACEBOOK_APP_ID */
  window.fbAsyncInit = () => {
    window.FB.init({
      appId      : FACEBOOK_APP_ID,
      cookie     : false,
      xfbml      : false,
      version    : 'v2.8'
    })
    callback()
  }

  /*eslint-disable */
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'))
  /*eslint-enable */
}

const checkFacebookLoginStatus = (dispatch, response) => {
  if (response.status === 'connected') {
    /*
    {
        status: 'connected',
        authResponse: {
            accessToken: '...',
            expiresIn:'...',
            signedRequest:'...',
            userID:'...'
        }
    }
    */
    dispatch(login(response.authResponse.accessToken))
  } else {
    dispatch(changeState('ready'))
  }
}

const login = (accessToken) => {
  return (dispatch, getState) => {
    dispatch(changeState('processing'))

    return fetch('/api/sessions', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        accessToken: accessToken
      })
    })
    .then(response => {
      if (response.ok) {
        dispatch(loginSucceeded())
        return
      }

      response.json().then(json => {
        dispatch(loginFailed(json.message || 'Error logging in.'))
      })
    })
    .catch(error => dispatch(loginFailed(error.message)))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_LOGIN_STATE]: (state, action) => ({ ...state, ...action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  state: 'idle', // idle,processing,ready,success,error
  error: null
}
function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { loginReducer as default, checkFacebook, loginWithFacebook }
