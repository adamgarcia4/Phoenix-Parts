import React, { Component, Fragment } from 'react'
import Card from '../../ui/Card'
import Well from '../../ui/Well'
import './Style.css'
class PartsDashboard extends Component {
  render() {
    const getCards = () => {
      const getCard = index => {
        return (
          <div className="parts-item" key={index}>
            <Card>
              <Card.CardPicture />
              <Card.CardContent>
                <h2>Drive Shaft</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis eos animi molestiae, suscipit
                distinctio aliquid sequi necessitatibus quam ut quis voluptate quas ipsa in iure, sapiente facilis
                beatae incidunt.
              </Card.CardContent>
              <Card.CardContentActions />
            </Card>
          </div>
        )
      }
      const test = Array.apply(null, { length: 10 })
        .map(Number.call, Number)
        .map(num => {
          return getCard(num)
        })

      console.log('test:', test)

      return test
    }

    return (
      <Fragment>
        <h1 className="parts-title">Parts Container</h1>
        <Well className="parts-well">
          <div className="parts-container">{getCards()}</div>
        </Well>
      </Fragment>
    )
  }
}

export default PartsDashboard
