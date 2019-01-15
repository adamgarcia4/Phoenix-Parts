import { useState, useRef, useEffect, useReducer } from 'react'
import firebase from '../modules/firebase'

const syncSetWithFirebase = refPath => {
  const [val, setVal] = useState(null)
  const firstUpdate = useRef(true)

  useEffect(() => {
    firebase.db.ref(refPath).on('value', snap => {
      setVal(snap.val())
    })
  }, [])

  useEffect(() => {

    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    firebase.db.ref(refPath).set(val).then(() => {
    })
  }, [val])

  return [val, setVal]
}

const syncSetWithFirebaseDispatch = (fbRef, reducer, initVal) => {
  const [val, setVal] = syncSetWithFirebase(fbRef)

  const prevDisp = useRef(null)
  const newDisp = useRef(null)
  const [state, dispatch] = useReducer(reducer, initVal)
  
  useEffect(() => {
    if(prevDisp.current !== newDisp.current) {
      setVal(state)
      prevDisp.current = newDisp.current
    }
  },[state])

  useEffect(() => {
    let payload = val || initVal

    // not sure if too imposing
    if(Array.isArray(payload)) {
      payload = payload.filter(value => Object.keys(value).length !== 0)
    }
      dispatch({type: 'reset', payload})
  }, [val])

  const newDispatch = action => {
    prevDisp.current = newDisp.current
    newDisp.current = Date.now()
    dispatch(action)
  }

  return [val, newDispatch]
}

export default { syncSetWithFirebase, syncSetWithFirebaseDispatch }