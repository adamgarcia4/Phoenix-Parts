// import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  parts: []
}

const rootReducer = (state = initialState, action) => {
  return [{
    id: 'Part 1'
  }, {
    id: 'Part 2'
  }]
  // switch (action.type) {
  //   case ADD_ARTICLE:
  //     return { ...state, articles: [...state.articles, action.payload] }
  //   default:
  //     return state
  // }
}

export default rootReducer
