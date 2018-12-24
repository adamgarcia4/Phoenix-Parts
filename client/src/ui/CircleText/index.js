import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Style.css'

const CircleText = ({ width, children, className }) => {
  return (
    <div
      className={cx('circle',className)}
      style={{ width, height: width }}>
      {children}
    </div>
  )
}

CircleText.propTypes = {
  width: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string
}

CircleText.defaultProps = {
  width: 50,
  children: ''
}

export default CircleText