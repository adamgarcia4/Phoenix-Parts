import actionTypes from '../actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { users } from '../../models'

function* registerUserSaga(action) {
  console.log('action:', action)
  const {
    payload: { email, password }
  } = action

  try {
    const registeredUser = yield call(users.registerEmailPassword, email, password)
    console.log('registeredUser:', registeredUser)
    yield put({
      type: actionTypes.user.successRegisterUser,
      payload: {
        user: registeredUser
      }
    })
  } catch (e) {
    console.log('err', e)
  }
}

function* mySaga() {
  console.log('actionTypes.user.registerUser:', actionTypes.user.registerUser)
  yield takeLatest(actionTypes.user.registerUser, registerUserSaga)
}

export default mySaga
