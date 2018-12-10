import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'
class Input extends Component {
  updateInputValue(evt) {
    const { onChange, name } = this.props

    onChange(name, evt.target.value)
  }

  render() {
    const { placeholder, type, name } = this.props
    return (
      <input
        className="form-control padding"
        name={name}
        value={this.props.value}
        onChange={evt => this.updateInputValue(evt)}
        type={type}
        placeholder={placeholder}
      />
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  initValue: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date ',
    'datetime-local ',
    'email ',
    'file',
    'hidden',
    'image',
    'month ',
    'number ',
    'password',
    'radio',
    'range ',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time ',
    'url',
    'week'
  ])
}

Input.defaultProps = {
  placeholder: 'Placeholder...',
  onChange: () => {},
  type: 'text',
  initValue: ''
}

export default Input
