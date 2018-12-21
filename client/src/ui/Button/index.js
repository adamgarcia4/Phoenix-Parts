import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Style.css'

const Button = props => {
  const { style, btnType, width, children } = props

  return (
    <div>
      <button // eslint-disable-line react/button-has-type
        type={btnType} 
        className={cx(`btn btn-${style} button`, {
          'btn-block': !!width
        })}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  btnType: PropTypes.string,
  style: PropTypes.string,
  width: PropTypes.bool,
  children: PropTypes.any
}

Button.defaultProps = {
  style: 'primary',
  btnType: 'button',
  width: false
}

export default Button

// {
//   /* <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
// <button type="button" class="btn btn-warning">Warning</button>
// <button type="button" class="btn btn-info">Info</button>
// <button type="button" class="btn btn-light">Light</button>
// <button type="button" class="btn btn-dark">Dark</button>

// <button type="button" class="btn btn-link">Link</button> */
// }
