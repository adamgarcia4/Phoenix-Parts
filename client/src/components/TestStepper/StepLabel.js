import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './StepLabel.css'

export default class StepLabel extends Component {
  render() {
    return (
      <span className="step-label-container">
        <span className="step-icon">
          <svg className="icon">
            <circle cx="12" cy="12" r="12" fill="red" className="icon-circle" />
            <text x="12" y="16" textAnchor="middle" className="icon-text">
              {this.props.stepNumber}
            </text>
          </svg>
        </span>
        <span className="step-text">{this.props.text}</span>
      </span>
    )
  }
}

StepLabel.propTypes = {
  stepNumber: PropTypes.number,
  text: PropTypes.string
}

StepLabel.defaultProps = {
  stepNumber: 1,
  text: 'Please Enter Text'
}
