import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import { App } from './containers/'

const { NODE_ENV } = process.env
var composeEnhancers = compose
let preloadedState = {}

if (!NODE_ENV) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  preloadedState = window.__PRELOADED_STATE__
}

export const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk)),
)

export const Imgur = (
  <Provider store={store}>
    <App />
  </Provider>
)

if (!NODE_ENV) {
  render(Imgur, document.getElementById('root'))
}
