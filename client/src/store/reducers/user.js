// import { ADD_ARTICLE } from '../constants/action-types'
import actionTypes from '../actionTypes'
// const initialState = {
//   firstName: 'Adam',
//   lastName: 'Garcia',
//   imgUrl:
//     'https://media.licdn.com/dms/image/C5103AQHoTTrJ1xgdvA/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=UXxNk6ueeo25msp7uYEjJ6SK2QwMfmfxS-OBDb4FU2A',
// }

const initialState = {}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.user.successRegisterUser:
      return Object.assign({}, state, { user: action.payload.user })
    default:
      return state
  }
}

export default rootReducer
