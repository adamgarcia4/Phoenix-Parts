import actionTypes from '../actionTypes'

const initialState = { loggedIn: false, profile: null }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.user.successRegisterUser: {
      const { profile } = action.payload
      return Object.assign({}, state, { profile, loggedIn: true })
    }
    default:
      return state
  }
}

export default rootReducer
