import {useState, useRef, useEffect, useReducer} from 'react'
import firebase from '../modules/firebase'

const syncSetWithFirebase = refPath => {
  const [val, setVal] = useState(null)
  const firstUpdate = useRef(true)

  useEffect(() => {
    firebase.db.ref(refPath).on('value', snap => {
      // console.log('update')
      setVal(snap.val())
    })
  }, [])

  useEffect(() => {

    if(firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    firebase.db.ref(refPath).set(val).then(() => {
    })
  },[val])
  
  return [val, setVal]
}

const syncSetWithFirebaseDispatch = reducer => {
  const [val, setVal] = syncSetWithFirebase('orders')

  const persistentVal = useRef(JSON.stringify(val))
  const currentVal = useRef(1)
  const newVal = useRef(1)
  const shouldUpdateState = useRef(false)

  const [state, dispatch] = useReducer(reducer, [])
  console.log('val:', val)
  console.log('state:', state)
  // console.log('====')
  // console.log('val:', val)
  // console.log('state:', state)
  // console.log('========')

  // if there are changes and no new dispatch was done, then I know that the change is coming from firebase's side
    useEffect(() => {
    firebase.db.ref('orders').on('value', snap => {
      
      if(shouldUpdateState.current === false) {
        shouldUpdateState.current = true
      }
      // if not dispatched, current === new
      // if dispatched, current !== new
      if(currentVal.current === newVal.current) {
        // not dispatched!
        console.log('a')
        if(shouldUpdateState.current) {
          dispatch({type: 'reset', payload: snap.val()})
          shouldUpdateState.current = false
        }

      } else {
        console.log('b')
        currentVal.current = newVal.current
        // dispatched!
      }
      // console.log('snap.val():', snap.val())
      // console.log('state:', state)
      // console.log('val:', val)
      // if()
    //   // Firebase changed without his permission.  Need to update my state
    //   console.log('snap.val():', snap.val())
    //   console.log('state:', state)
    //   console.log('val:', val)

    //   // if(JSON.stringify(state) !== persistentVal.current) {
    //   //   dispatch({type: 'reset', payload: snap.val()})
    //   // }
    })
  })
  
  // here, I can intercept if a user made a call to dispatch.
  const newDispatch = action => {
    console.log('dispatch occured!')
    dispatch(action)
    shouldUpdateState.current = false
    newVal.current = Math.floor(Math.random()*100000)
  }
  


  if(persistentVal.current !== JSON.stringify(state)) {
    setVal(state)
    persistentVal.current = JSON.stringify(state)
  }

  return [val, newDispatch]
}

export default {syncSetWithFirebase, syncSetWithFirebaseDispatch}