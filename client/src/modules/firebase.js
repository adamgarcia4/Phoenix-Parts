import firebase from 'firebase'
import constants from '../utils/constants'

firebase.initializeApp(constants.firebaseConfig)

const database = firebase.database()
const partsRef = database.ref().child('parts')
const provider = new firebase.auth.GoogleAuthProvider()
// export default firebase

export default {
  database,
  partsRef,

  // For Auth
  provider

}