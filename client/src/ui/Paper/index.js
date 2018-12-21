import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import './Style.css'

const Paper = props => {
  const { children, className } = props

  return <div className={cx('paper', className)}>{children}</div>
}

Paper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default Paper
