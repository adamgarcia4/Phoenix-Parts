// import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  parts: [],
}

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min)
// }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PARTS':
      return action.payload
    case 'ADD_PART':
      // console.log('payload is: ', action)
      return [
        ...state,
        {
          partName: action.payload.partName || 'Part 3',
          partNumber: action.payload.partNumber || '4-2019-100-103',
          Qty: 1,
          Location: 'B12',
          Action: 'none',
        },
      ]

    default:
      return [{
          partName: 'Part 1',
          partNumber: '4-2019-100-101',
          Qty: 1,
          Location: 'B12',
          Action: 'none',
        },
        {
          partName: 'Part 2',
          partNumber: '4-2019-100-102',
          Qty: 3,
          Location: 'B24',
          Action: 'yes',
        },
      ]
  }

  // switch (action.type) {
  //   case ADD_ARTICLE:
  //     return { ...state, articles: [...state.articles, action.payload] }
  //   default:
  //     return state
  // }
}

export default rootReducer