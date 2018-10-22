import firebase from '../modules/firebase'

const DB_REF = 'parts'

const addPart = data => {
  // TODO: part validation via JOI??
  return firebase.rebase.push(DB_REF, { data })
}

const getAllParts = callback => {
  return firebase.rebase.fetch(DB_REF, { asArray: true })
}

export default {
  addPart,
  getAllParts
}
