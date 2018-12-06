import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Group = styled.div`
  position: relative;
  margin: 20px 0px 10px 0px;
`
const InputStyle = styled.input`
  background: none;
  /* color: #c6c6c6; */
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 320px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #c6c6c6;

  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 12px;
    color: #2196f3;
  }
  &:focus ~ .bar:before {
    width: 320px;
  }
`

const Label = styled.label`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`

const Input = ({
  type, name, value, onChange, label,
}) => (
  <Group>
    <InputStyle type={type} name={name} value={value} onChange={onChange} />
    {/* <span class="highlight" />
      <span class="bar" /> */}
    <Label>{label}</Label>
  </Group>
)

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  label: 'label',
}

export default Input

// const Bar = styled.span`
//   position: relative;
//   display: block;
//   width: $width;
//   &:before {
//     content: '';
//     height: 2px;
//     width: 0;
//     bottom: 0px;
//     position: absolute;
//     background: #2196f3;
//     transition: 300ms ease all;
//     left: 0%;
//   }
// `
