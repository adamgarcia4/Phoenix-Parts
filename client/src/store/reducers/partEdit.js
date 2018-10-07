// import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  machines: [],
}

const rootReducer = (state = initialState, action) => {
  // console.log('payload is: ', action)

  const isMachinePresent = state.machines.filter(machine => machine === action.payload).length !== 0

  switch (action.type) {
    case 'ADD_MACHINE':
      if (isMachinePresent) {
        return state
      }
      return Object.assign({}, state, {
        machines: [...state.machines, action.payload],
      })

    default:
      return state
  }
}

export default rootReducer
