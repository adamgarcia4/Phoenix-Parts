import actionTypes from '../actionTypes'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { users } from '../../models'

const defaultUserProfile = {
  first_name: 'First',
  last_name: 'Last',
  img_url: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png'
}

function* registerUserSaga(action) {
  console.log('action:', action)
  const {
    payload: { email, password }
  } = action

  try {
    // Sign up user
    const registeredUser = yield call(users.registerEmailPassword, email, password)
    console.log('registeredUser:', registeredUser)

    const {
      user: { uid }
    } = registeredUser
    // Once user signed up, then generate default settings to be put in /users/uid
    yield call(users.updateDatabase, uid, defaultUserProfile)

    const profile = yield call(users.getDatabase, uid)

    yield put({
      type: actionTypes.user.successRegisterUser,
      payload: {
        user: registeredUser,
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
