import React, { Component } from 'react'
import Paper from '../Paper'
import './Style.css'

const CardPicture = props => {
  return <div className="card-picture" title="Test" style={{ backgroundImage: `url('${props.url}')` }} />
}

const CardContent = props => {
  return <div className="card-content">{props.children}</div>
}

const CardContentActions = props => {
  return <div className="card-content-actions">{props.children}</div>
}

class Card extends Component {
  static CardPicture = CardPicture
  static CardContent = CardContent
  static CardContentActions = CardContentActions
  render() {
    return (
      <Paper className="card-container">
        {this.props.children}
        {/* <h2>Drive Shaft</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis eos animi molestiae, suscipit
          distinctio aliquid sequi necessitatibus quam ut quis voluptate quas ipsa in iure, sapiente facilis beatae
          incidunt. */}
      </Paper>
    )
  }
}

export default Card
