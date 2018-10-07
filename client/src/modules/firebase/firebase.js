import firebase from 'firebase'
import constants from '../../utils/constants'

// TODO: Add Dev and Prod constant switching based on process.env.NODE_ENV === 'production'
// https://bit.ly/2pj0G6V

firebase.initializeApp(constants.firebaseConfig)


export const db = firebase.database()
export const auth = firebase.auth()

// All firebase modules to be exported
// export default {
//   db,
//   auth,
// }