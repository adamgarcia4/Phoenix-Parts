import actionTypes from '../actionTypes'

const registerUser = (email, password) => {
  return {
    type: actionTypes.user.registerUser,
    payload: { email, password }
  }
}

const registerUserSuccess = () => {
  return {
    type: actionTypes.user.successRegisterUser
  }
}

export default {
  registerUser,
  registerUserSuccess
}
