// import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  machines: []
}

const rootReducer = (state = initialState, action) => {
  console.log('payload is: ', action)
  switch (action.type) {
    case 'ADD_MACHINE':
      const isMachinePresent =
        state.machines.filter(machine => machine === action.payload).length !==
        0

      if (isMachinePresent) {
        return state
      } else {
        return Object.assign({}, state, {
          machines: [...state.machines, action.payload]
        })
      }
      break

    default:
      return state
      break
  }
}

export default rootReducer
