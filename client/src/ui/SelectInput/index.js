import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = props => {
  const { options, onSelected } = props

  const noneOption = [
    {
      value: '',
      label: 'None'
    }
  ]
  const inputChanged = e => {
    const val = e.target.value
    onSelected(val)
  }

  const fullOptionsList = [...noneOption, ...options]

  return (
    <select onChange={inputChanged} className="form-control">
      {fullOptionsList.map((option, index) => {
        return (
          <option value={option.value} key={index}>
            {option.label || option.value}
          </option>
        )
      })}
    </select>
  )
}

SelectInput.propTypes = {
  onSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}

SelectInput.defaultProps = {
  options: []
}

export default SelectInput
