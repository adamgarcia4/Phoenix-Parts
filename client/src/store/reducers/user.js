import actionTypes from '../actionTypes'

const initialState = { loggedIn: false }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.user.successRegisterUser:
      const {
        user: {
          user: { uid }
        },
        profile,
        user
      } = action.payload

      return Object.assign({}, state, { uid, user, profile, loggedIn: true })
    default:
      return state
  }
}

export default rootReducer
