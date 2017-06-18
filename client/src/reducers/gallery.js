import { Gallery } from './../actions/'

const initialState = {
  currentPage: 0,
  fetching: false,
  images: [],
  modal: null
}

export function gallery (state = initialState, action) {
  switch (action.type) {
    case Gallery.consts.FETCHING: {
      return { ...state, fetching: true }
    }
    case Gallery.consts.LOAD: {
      return { ...state, fetching: false, images: action.payload }
    }
    case Gallery.consts.APPEND: {
      return {
        ...state,
        fetching: false,
        images: { ...state.images, ...action.payload },
        currentPage: state.images + 1
      }
    }
    case Gallery.consts.LOAD_IMAGE: {
      return { ...state, fetching: false, modal: action.payload }
    }
    case Gallery.consts.CLOSE_MODAL: {
      return { ...state, modal: null }
    }
    default:
      return state
  }
}
