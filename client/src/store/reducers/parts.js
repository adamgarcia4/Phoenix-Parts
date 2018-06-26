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
      return [
        ...state,
        {
          'Part Name': 'Part 3',
          'Part Number': '4-2019-100-103',
          Qty: 1,
          Location: 'B12',
          Action: 'none'
        }
      ]
      break

    default:
      return [
        {
          'Part Name': 'Part 1',
          'Part Number': '4-2019-100-101',
          Qty: 1,
          Location: 'B12',
          Action: 'none'
        },
        {
          'Part Name': 'Part 2',
          'Part Number': '4-2019-100-102',
          Qty: 3,
          Location: 'B24',
          Action: 'yes'
        }
      ]
      break
  }

  // switch (action.type) {
  //   case ADD_ARTICLE:
  //     return { ...state, articles: [...state.articles, action.payload] }
  //   default:
  //     return state
  // }
}

export default rootReducer
