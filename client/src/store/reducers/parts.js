// import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  parts: []
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PART':
      return [...state, {id: `Part ${getRandomArbitrary(1,100)}`}]
      break;

    default:
      return [{
        id: 'Part 1'
      }, {
        id: 'Part 2'
      }]
      break;
  }

  // switch (action.type) {
  //   case ADD_ARTICLE:
  //     return { ...state, articles: [...state.articles, action.payload] }
  //   default:
  //     return state
  // }
}

export default rootReducer
