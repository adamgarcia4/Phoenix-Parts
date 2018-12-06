import firebase from '../modules/firebase'

const registerEmailPassword = (email, password) => {
  return firebase.auth.doCreateUserWithEmailAndPassword(email, password)
}

export default {
  registerEmailPassword
}
