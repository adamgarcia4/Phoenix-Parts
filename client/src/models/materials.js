import firebase from '../modules/firebase'

const DB_REF = 'materials'

const addMaterial = data => {
  // TODO: part validation via JOI??
  return firebase.rebase.push(DB_REF, { data })
}

const getAllMaterials = callback => {
  return firebase.rebase.fetch(DB_REF, { asArray: true })
}

export default {
  addMaterial,
  getAllMaterials
}
