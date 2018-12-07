import firebase from '../modules/firebase'

const registerEmailPassword = (email, password) => {
  return firebase.auth.doCreateUserWithEmailAndPassword(email, password)
}

const updateDatabase = (uid, data) => {
  return firebase.rebase.update(`users/${uid}`, {
    data
  })
}

const getDatabase = uid => {
  return firebase.rebase.fetch(`users/${uid}`, {})
}

export default {
  registerEmailPassword,
  updateDatabase,
  getDatabase
}
