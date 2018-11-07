import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Style.css'

class Well extends Component {
  render() {
    return <div className={cx('well', this.props.className)}>{this.props.children}</div>
  }
}

Well.propTypes = {
  size: PropTypes.string
}

export default Well
