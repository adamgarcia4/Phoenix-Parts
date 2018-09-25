// import firebase from '../../modules/firebase'

export function addPart(part) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  console.log('part is: ', part)
  return {
    type: 'ADD_PART',
    payload: part
  }
}

export function addMachine(machine) {
  return {
    type: 'ADD_MACHINE',
    payload: machine
  }
}

export const getParts = _ => async dispatch => {
  // firebase.partsRef.on('value', snapshot => {
  //   dispatch({
  //     type: 'GET_PARTS',
  //     payload: snapshot.val()
  //   })
  // })
}

export function updatePartForm(field, newValue) {
  return {
    type: 'UPDATE_PART_FORM',
    payload: {
      field,
      newValue
    }
  }
}