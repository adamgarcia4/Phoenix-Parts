import React from 'react'
import PropTypes from 'prop-types'

const DownArrow = ({size}) => {
  return (
    <svg
      style={{width: size, height: size}}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      <path
        fill="none"
        d="M0 0h24v24H0z" />
    </svg>

  )
}

DownArrow.propTypes = {
  size: PropTypes.number
}

DownArrow.defaultProps = {
  size: 25
}

export default DownArrow