import React from 'react'
import Card from '../../ui/Card'
// import firebase from '../../modules/firebase'

const Home = () => {
  // const asyncMachineList = () => {
  //   return new Promise((resolve, reject) => {
  //     const handle = firebase.rebase.fetch('parts', { context: this, asArray: true })

  //     handle.then(data => {
  //       const optionFormat = data.map(row => ({
  //         value: row.partNumber,
  //         label: row.partName
  //       }))
  //       return resolve(optionFormat)
  //     })
  //   })
  // }

  // const handleInputChange = (inputValue, actionMeta) => {}

  // const options = [{ value: '6061 T6', label: '6061 T6 Aluminum' }, { value: '6061 Ts', label: '6061 T6 Aluminum' }]

  return (
    <div>
      <h1>Home Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      {/* <StatusBadge scotchbrite />

      <AsyncSelectInput
        // options={options}
        onSelected={val => {
          console.log('valfrom outside:', val)
        }}
        asyncLoadOptions={asyncMachineList}
      />
      <PartNumbering /> */}
    </div>
  )
}

export default Home
