import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
// let Header = require('./components/Header/')
import Header from './components/Header/'
import Typography from '@material-ui/core/Typography'
import PartCard from './components/partCard'
import { Route } from 'react-router-dom'
import PartsEntry from './scenes/partsEntry'
import Dashboard from './scenes/dashboard'
import Home from './scenes/home'

import { connect } from 'react-redux'

let axios = require('axios')

class App extends React.Component {
  componentWillMount() {
    // console.log('state is', this.props.state)
  }

  render() {
    return (
      <div>
        <Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/parts" component={PartsEntry} />
        </Header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default App
// export default connect(
//   mapStateToProps,
//   null
// )(App)
