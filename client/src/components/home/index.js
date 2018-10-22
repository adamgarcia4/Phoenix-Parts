import React from 'react'
import StatusBadge from '../../components/statusBadge'
import PartNumbering from '../../components/partNumbering'
// var provider = new firebase.auth.GoogleAuthProvider();
import firebase from '../../modules/firebase'

import SelectInput from '../../ui/SelectInput'
import AsyncSelectInput from '../../ui/AsyncSelectInput'

import Select from 'react-select/lib/Select'

const Home = () => {
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`Action: ${actionMeta.action}`)
    console.groupEnd()
  }

  const asyncMachineList = () => {
    return new Promise((resolve, reject) => {
      const handle = firebase.rebase.fetch('parts', { context: this, asArray: true })

      handle.then(data => {
        const optionFormat = data.map(row => ({
          value: row.partNumber,
          label: row.partName
        }))
        return resolve(optionFormat)
      })
    })
  }

  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed')
    console.log(inputValue)
    console.log(`Action: ${actionMeta.action}`)
    console.groupEnd()
  }

  const options = [{ value: '6061 T6', label: '6061 T6 Aluminum' }, { value: '6061 Ts', label: '6061 T6 Aluminum' }]

  return (
    <div>
      <h1>Home Page</h1>
      <StatusBadge scotchbrite />

      <AsyncSelectInput
        // options={options}
        onSelected={val => {
          console.log('valfrom outside:', val)
        }}
        asyncLoadOptions={asyncMachineList}
      />
      <PartNumbering />
    </div>
  )
}

export default Home
