import React from 'react'
import StatusBadge from '../../components/statusBadge'
import CreatableSelect from 'react-select/lib/Creatable'
// var provider = new firebase.auth.GoogleAuthProvider();

const Home = () => {
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`Action: ${actionMeta.action}`)
    console.groupEnd()
  }

  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed')
    console.log(inputValue)
    console.log(`Action: ${actionMeta.action}`)
    console.groupEnd()
  }

  const options = [{ value: '6061 T6', label: '6061 T6 Aluminum' }]
  return (
    <div>
      <h1>Home Page</h1>
      <StatusBadge scotchbrite />

      <CreatableSelect isClearable onChange={handleChange} onInputChange={handleInputChange} options={options} />
    </div>
  )
}

export default Home
