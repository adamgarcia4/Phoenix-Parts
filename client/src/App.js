import React from 'react'
import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header'
import PartsEntry from './scenes/partsEntry'
import Dashboard from './scenes/dashboard'
import Home from './scenes/home'
import PartNumbering from './scenes/partNumbering'
// import logo from './logo.svg'

// const axios = require('axios')

class App extends React.Component {
  componentWillMount() {
    // console.log('state is', this.props.state)
  }

  render() {
    return (
      <div>
        <Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/partNumbering" component={PartNumbering} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/parts" component={PartsEntry} />
        </Header>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     state
//   }
// }

export default App
// export default connect(
//   mapStateToProps,
//   null
// )(App)
