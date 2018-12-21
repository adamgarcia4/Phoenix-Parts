import React, { Component } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import './Style.css'

const CardPicture = ({url}) => { // eslint-disable-line
  return <div
    className="card-picture"
    title="Test"
    style={{ backgroundImage: `url('${url}')` }} />
}

const CardContent = ({children}) => { // eslint-disable-line
  return <div className="card-content">{children}</div>
}

const CardContentActions = ({children}) => { // eslint-disable-line
  return <div className="card-content-actions">{children}</div>
}

const CardTitle = ({title}) => { // eslint-disable-line
  return <h2 className="card-title">{title}</h2>
}

class Card extends Component {
  static CardPicture = CardPicture

  static CardContent = CardContent

  static CardContentActions = CardContentActions

  static CardTitle = CardTitle

  
  render() {
    const {className, children} = this.props

    return (
      <Paper className={cx('card-container', className)}>
        {children}
      </Paper>
    )
  }
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default Card
