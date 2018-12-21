import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Style.css'

const Well = ({className, children}) => {
  return <div className={cx('well', className)}>{children}</div>

}
Well.propTypes = {
  // size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
}

export default Well
