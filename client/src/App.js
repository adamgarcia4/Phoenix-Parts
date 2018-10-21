import React from 'react'
import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header'
import BootstrapHeader from './components/BootstrapHeader'
import PartsEntry from './components/partsEntry'
import Dashboard from './components/dashboard'
import Home from './components/home'
import PartNumbering from './components/partNumbering'
import PartsTable from './components/PartsTable'
import LoginForm from './components/login'
import OrderForm from './components/orderPage'
// import logo from './logo.svg'

// const axios = require('axios')

class App extends React.Component {
  componentWillMount() {
    // console.log('state is', this.props.state)
  }

  render() {
    return (
      <div>
        <BootstrapHeader appName="Phoenix Parts">
          <Route exact path="/" component={Home} />
          <Route exact path="/partNumbering" component={PartNumbering} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/parts" component={PartsEntry} />
          <Route path="/partsTest" component={PartsTable} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/orders" component={OrderForm} />
        </BootstrapHeader>
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
