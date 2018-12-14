import React from 'react'
import cx from 'classnames'

import './Style.css'

const Paper = props => {
  const { children, className } = props

  return <div className={cx('paper', className)}>{children}</div>
}

export default Paper
