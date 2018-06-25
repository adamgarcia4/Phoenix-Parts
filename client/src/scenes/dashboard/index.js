import React, { Component } from 'react'
import PartsTable from '../../components/PartsTable'


class Dashboard extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
        <PartsTable />
      </div>
    )
  }
}

export default Dashboard
