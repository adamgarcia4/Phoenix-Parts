import React from 'react'
import proptypes from 'prop-types'
import Card from '../../ui/Card'

const PartCard = ({ picUrl, partName, description }) => {

  return (
    <Card>
      <Card.CardPicture url={picUrl} />
      <Card.CardContent>
        <h2>{partName}</h2>
        {description}
      </Card.CardContent>
      <Card.CardContentActions>
        <button
          type="button"
          className="btn btn-primary">
          Go to part
          </button>
        <button
          type="button"
          className="btn btn-secondary">
          Edit
          </button>
      </Card.CardContentActions>
    </Card>
  )
}

PartCard.propTypes = {
  partName: proptypes.string.isRequired,
  picUrl: proptypes.string.isRequired,
  description: proptypes.string
}

export default PartCard
