import {useState, useRef, useEffect} from 'react'
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

export default {syncSetWithFirebase}