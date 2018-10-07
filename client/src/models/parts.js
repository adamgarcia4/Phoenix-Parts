import firebase from '../modules/firebase'

const addPart = part => {
  // TODO: part validation via JOI??
  return firebase.partsRef.push(part)
}

const getAllParts = callback => {
  return firebase.partsRef.on('value', snap => {
    return callback(snap.val())
  })
}

export default {
  addPart,
  getAllParts
}
