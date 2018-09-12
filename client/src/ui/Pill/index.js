import React from 'react'
import PropTypes from 'prop-types'

require('./style.css')

const Pill = props => {
  const { children } = props
  return <div className="button">{children}</div>
}

Pill.propTypes = {
  children: PropTypes.string
}

export default Pill
