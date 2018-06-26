import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@material-ui/core/Button'
// let Header = require('./components/Header/')
import Header from './components/Header/'
import Typography from '@material-ui/core/Typography'
import PartCard from './components/partCard'
import { Route } from 'react-router-dom'
import Parts from './scenes/parts'
import Dashboard from './scenes/dashboard'
import Home from './scenes/home'

import Avatar from './components/Avatar'
import AvatarHeader from './components/AvatarHeader'
let axios = require('axios')

const Category = () => {
  return (
    <div>
      <h2>category</h2>
    </div>
  )
}

class App extends React.Component {
  componentWillMount() {
    console.log('fetching parts')
    // axios
    //   .get('http://localhost:5000/parts')
    //   .then(res => res.data)
    //   .then(console.log)
  }

  render() {
    return (
      <div>
        {/* <Header> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/parts" component={Parts} />
        {/* </Header> */}
      </div>
    )
  }
}

export default App
