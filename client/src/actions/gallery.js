const { NODE_ENV } = process.env
if (NODE_ENV) global.fetch = require('node-fetch')

import createActions from './createActions'
import { API_CLIENT } from './../constants/api'

export const consts = createActions('GALLERY', [
  'LOAD',
  'LOAD_IMAGE',
  'FETCHING',
  'LOADING_DONE',
  'CLOSE_MODAL'
])

var params = {
  method: 'GET',
  headers: {
    'Authorization': `Client-ID ${API_CLIENT}`
  },
  mode: 'cors',
  cache: 'default'
}

export const load = data => dispatch => {
  dispatch({ type: consts.FETCHING })
  return fetch('https://api.imgur.com/3/gallery/hot/viral/0.json', params)
      .then(response => response.json())
      .then(json => dispatch({
        type: consts.LOAD,
        payload: json.data
      }))
}

export const loadImage = imageID => dispatch => {
  dispatch({ type: consts.FETCHING })
  return fetch(`https://api.imgur.com/3/image/${imageID}`, params)
      .then(response => response.json())
      .then(json => dispatch({
        type: consts.LOAD_IMAGE,
        payload: json.data
      }))
}

export const closeModal = _ => ({ type: consts.CLOSE_MODAL })
