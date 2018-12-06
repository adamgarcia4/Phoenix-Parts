import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'

class Button extends Component {
  render() {
    const { style, type } = this.props
    return (
      <div>
        <button type={type} className={`btn btn-${style} button`}>
          {this.props.children}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string
}

Button.defaultProps = {
  style: 'primary',
  type: 'button'
}

export default Button

{
  /* <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button> */
}
