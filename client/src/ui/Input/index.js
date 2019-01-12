import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import './Style.css'

const Input = styled.input`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`

const Input2 = ({ placeholder, type, name, value, onChange, style }) => {
  return (
    <input
      className="form-control"
      name={name}
      placeholder={placeholder}
      type={type}
      style={style}
      // provided by useFormInput
      value={value}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
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
  ]),
  style: PropTypes.any
}

Input.defaultProps = {
  placeholder: 'Placeholder...',
  type: 'text'
}

export default Input

export function useFormInput(initialVal) {
  const [value, setValue] = useState(initialVal)

  return {
    value,
    onChange: evt => setValue(evt.target.value)
  }
}
