import React, { Component } from 'react'
import './StepLabel.css'

export default class StepLabel extends Component {
  render() {
    return (
      <span className="step-label-container">
        <span className="step-icon">
          <svg className="icon">
            <circle cx="12" cy="12" r="12" fill="red" className="icon-circle" />
            <text x="12" y="18" textAnchor="middle" className="icon-text">
              1
            </text>
          </svg>
        </span>
        <span className="step-text">hii</span>
      </span>
    )
  }
}
