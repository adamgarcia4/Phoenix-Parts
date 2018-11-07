import React, { Component, Fragment } from 'react'
import Card from '../../ui/Card'
import Well from '../../ui/Well'
import './Style.css'
class PartsDashboard extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="parts-title">Parts Container</h1>
        <Well className="parts-well">
          <div className="parts-container">
            <div className="parts-item">
              <Card />
            </div>
            <div className="parts-item">
              <Card />
            </div>
            <div className="parts-item">
              <Card />
            </div>
            <div className="parts-item">
              <Card />
            </div>
            <div className="parts-item">
              <Card />
            </div>
            <div className="parts-item">
              <Card />
            </div>
            <div className="parts-item">
              <Card />
            </div>
          </div>
        </Well>
      </Fragment>
    )
  }
}

export default PartsDashboard
