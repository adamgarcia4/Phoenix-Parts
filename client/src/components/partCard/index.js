import React, { Component } from 'react'
import Card from '../../ui/Card'
import proptypes from 'prop-types'

class PartCard extends Component {
  render() {
    return (
      <Card>
        <Card.CardPicture url={this.props.picUrl} />
        <Card.CardContent>
          <h2>{this.props.partName}</h2>
          {this.props.description}
        </Card.CardContent>
        <Card.CardContentActions>
          <button type="button" className="btn btn-primary">
            Go to part
          </button>
          <button type="button" className="btn btn-secondary">
            Edit
          </button>
        </Card.CardContentActions>
      </Card>
    )
  }
}

PartCard.propTypes = {
  partName: proptypes.string.isRequired,
  picUrl: proptypes.string.isRequired,
  description: proptypes.string
}

export default PartCard
