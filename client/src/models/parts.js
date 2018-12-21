import firebase from '../modules/firebase'

const DB_REF = 'parts'

const addPart = data => {
  // TODO: part validation via JOI??
  return firebase.rebase.push(DB_REF, { data })
}

const getAllParts = callback => { //eslint-disable-line
  return firebase.rebase.fetch(DB_REF, { asArray: true })
}

const updatePart = (partNumber, updateObj) => {
  const updates = {}

  Object.keys(updateObj).map(partKey => {
    updates[`${partNumber}/${partKey}`] = updateObj[partKey]
  })

  return firebase.db.ref(DB_REF).update(updates)
}

export default {
  addPart,
  getAllParts,
  updatePart
}
