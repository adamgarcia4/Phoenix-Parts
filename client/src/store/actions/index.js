export function addPart(part) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  console.log('part is: ', part)
  return {
    type: 'ADD_PART',
    payload: part
  }
}
