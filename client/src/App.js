import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header'
import BootstrapHeader from './components/BootstrapHeader'
import PartsEntry from './components/partsEntry'
import Dashboard from './components/dashboard'
import PartsDashboard from './components/PartsDashboard'
import Home from './components/home'
import PartNumbering from './components/partNumbering'
import PartsTable from './components/PartsTable'
import LoginForm from './components/login'
import OrderForm from './components/orderPage'
import MaterialEntry from './components/MaterialEntry'

import Bindings from './hoc/Bindings'

class App extends React.Component {
  componentWillMount() {
    // console.log('state is', this.props.state)
  }

  render() {
    return (
      <div>
        <BootstrapHeader appName="Phoenix Parts">
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/materialEntry" component={MaterialEntry} />
          <Route exact path="/partNumbering" component={PartNumbering} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/parts-dashboard" component={PartsDashboard} />
          <Route path="/parts" component={PartsEntry} />
          <Route path="/parts-dashboard" component={PartsTable} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/orders" component={OrderForm} />
        </BootstrapHeader>
      </div>
    )
  }
}

export default Bindings(App)
// export default connect(
//   mapStateToProps,
//   null
// )(App)
