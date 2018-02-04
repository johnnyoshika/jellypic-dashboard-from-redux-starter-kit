/* global WEB_PUSH_VAPID_PUBLIC_KEY */

// ------------------------------------
// Constants
// ------------------------------------
const SUBSCRIBE_STATE = 'SUBSCRIBE_STATE'

// ------------------------------------
// Actions
// ------------------------------------
const changeState = (state) => {
  return {
    type: SUBSCRIBE_STATE,
    payload: {
      state: state,
      error: null
    }
  }
}

const saveFailed = (message) => {
  return {
    type: SUBSCRIBE_STATE,
    payload: {
      state: 'error',
      error: message
    }
  }
}

const saveSucceeded = () => {
  return {
    type: SUBSCRIBE_STATE,
    payload: {
      state: 'idle',
      error: null
    }
  }
}

const toggle = () => {
  return (dispatch, getState) => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window))
      return;

    navigator.serviceWorker.ready.then(sw => {
      sw.pushManager.getSubscription()
        .then(s => {
          if (s === null)
            subscribe(dispatch)
          else
            unsubscribe(dispatch, s)
        })
    })
  }
}

const subscribe = (dispatch) => {
  navigator.serviceWorker.ready.then(sw => {
    sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(WEB_PUSH_VAPID_PUBLIC_KEY)
    })
    .then(s => {
      var foo = save(dispatch, '/api/subscriptions', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(s)
      })
    })
    .catch(error => console.log(error))
  })
}

const unsubscribe = (dispatch, subscription) => {

  subscription.unsubscribe()

  return save(`/api/subscriptions/${encodeURIComponent(subscription.endpoint)}`, {
    method: 'DELETE',
    credentials: 'include'
  })
}

const save = (dispatch, url, request) => {
  dispatch(changeState('saving'))
  
  return fetch(url, request)
    .then(response => {
      if (response.headers.get('Content-Type').split(';')[0].toLowerCase().trim() !== 'application/json')
        throw new Error('Error connecting to the server. Please try again!')

      response.json().then(json => {
        if (!response.ok) {
          dispatch(saveFailed(json.message))
          return
        }

        dispatch(saveSucceeded())
      })
    })
    .catch(error => dispatch(saveFailed(error.message)))
}

// source: https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/app/scripts/main.js
const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SUBSCRIBE_STATE]: (state, action) => ({ ...state, ...action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  state: 'idle', // idle,saving,error
  error: null
}
function subscriberReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export { subscriberReducer as default, toggle }
