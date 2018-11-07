import firebase from '../modules/firebase'

const DB_REF = 'materials'

const addMaterial = data => {
  // TODO: part validation via JOI??
  return firebase.rebase.push(DB_REF, { data })
}

const getAllMaterials = () => {
  return firebase.rebase.fetch(DB_REF, { asArray: true })
}

const listenAllMaterials = callback => {
  return firebase.rebase.listenTo(DB_REF, {
    context: this,
    asArray: true,
    then: callback
  })
}

export default {
  addMaterial,
  getAllMaterials,
  listenAllMaterials
}
