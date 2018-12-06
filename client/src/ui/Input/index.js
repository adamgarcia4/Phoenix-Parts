import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'
class Input extends Component {
  state = {
    inputValue: this.props.initValue
  }

  updateInputValue(evt) {
    const { onChange, name } = this.props
    evt.persist()
    this.setState(
      (props, state) => {
        return {
          inputValue: evt.target.value
        }
      },
      () => {
        const { inputValue } = this.state
        onChange(name, inputValue)
      }
    )
  }

  render() {
    const { placeholder, onChange, type, name } = this.props
    return (
      <input
        className="form-control padding"
        name={name}
        value={this.state.inputValue}
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
