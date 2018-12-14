import actionTypes from '../actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { users } from '../../models'

const defaultUserProfile = {
  first_name: 'Adam',
  last_name: 'Garcia',
  img_url: 'https://d1qb2nb5cznatu.cloudfront.net/users/4191934-large?1475518081'
}

function* registerUserSaga(action) {
  console.log('action:', action)

  try {
    // Sign up user
    const registeredUser = yield call(users.registerEmailPassword, action.payload.email, action.payload.password)
    console.log('registeredUser:', registeredUser)

    // Once user signed up, then generate default settings to be put in /users/uid
    yield call(users.updateDatabase, registeredUser.user.uid, {
      ...defaultUserProfile,
      email: registeredUser.user.email,
      uid: registeredUser.user.uid
    })

    const profile = yield call(users.getDatabase, registeredUser.user.uid)

    yield put({
      type: actionTypes.user.successRegisterUser,
      payload: {
        profile
      }
    })
  } catch (e) {
    // TODO: error can be that email address already taken
    console.log('err', e)
  }
}

function* mySaga() {
  console.log('actionTypes.user.registerUser:', actionTypes.user.registerUser)
  yield takeLatest(actionTypes.user.registerUser, registerUserSaga)
}

export default mySaga
